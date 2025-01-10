"use client";

import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { darcula } from "react-syntax-highlighter/dist/esm/styles/prism";
import NewUseOptimistic from "./NewUseOptismistic";

const codeSnippet = `
"use client";

import { useOptimistic, useState } from "react";

const updateName = async (name: string): Promise<string | null> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      if (name === "error") {
        resolve("Name cannot be 'error'");
      } else {
        resolve(name);
      }
    }, 5000);
  });
};

function ChangeName({
  currentName,
  onUpdateName,
}: {
  currentName: string;
  onUpdateName: any;
}) {
  const [optimisticName, setOptimisticName] = useOptimistic(currentName);

  const submitAction = async (formData: any) => {
    const newName = formData.get("name");
    setOptimisticName(newName);
    const updatedName = await updateName(newName);
    onUpdateName(updatedName);
  };


  // ejemplos de usar optimist con useFormStatus

  return (
    <form
      action={submitAction}
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "1rem",
      }}
    >
      <p>Your name is: {optimisticName}</p>
      <p>
        <label>Change Name:</label>
        <input
          type="text"
          name="name"
          disabled={currentName !== optimisticName}
        />
      </p>
    </form>
  );
}

const NewUseOptimistic = () => {
  const [name, setName] = useState<string>("John Doe");

  return (
    <div>
      <ChangeName currentName={name} onUpdateName={setName} />
    </div>
  );
};

export default NewUseOptimistic;

`;

const index = () => {
  return (
    <div>
      <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
        <h2>
          Nuevo <code>useOptismistic</code>
        </h2>
        <h3>
          Este hook nos permite manejar estados optimistas de manera sencilla.
          Eso significa que podemos actualizar el estado de un componente antes
          de que la operación asincrónica haya terminado.
        </h3>
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
        <SyntaxHighlighter language="tsx" style={darcula}>
          {codeSnippet}
        </SyntaxHighlighter>
        <h2>
          Ejemplo de uso de <code>useOptimistic</code>
        </h2>
        <NewUseOptimistic />
      </div>
    </div>
  );
};
export default index;
