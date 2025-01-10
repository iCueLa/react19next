"use client";

import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { darcula } from "react-syntax-highlighter/dist/esm/styles/prism";
import OptimistWhitFormAction from "./OptimistWhitFormAction";

const codeSnippet = `
"use client";

import { useActionState, useOptimistic, useState } from "react";

const updateName = async (name: string): Promise<string | null> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      if (name === "error") {
        resolve("Name cannot be 'error'");
      } else {
        resolve(null);
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

  const [error, submitAction, isPending] = useActionState(
    async (previousState, formData) => {
      const value = formData.get("name");
      setOptimisticName(value);
      const error = await updateName(value);
      if (error) {
        setOptimisticName(previousState);
        return error;
      }
      onUpdateName(value);
      return null;
    },
    null
  );

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
        <div>
          <input
            type="text"
            name="name"
            disabled={currentName !== optimisticName}
          />
          <button type="submit" disabled={isPending}>
            Actualizar
          </button>
          {error && <p>{error}</p>}
          {isPending && <p style={{ color: "blue" }}>Cargando....</p>}
        </div>
      </p>
    </form>
  );
}

const OptimistWhitFormAction = () => {
  const [name, setName] = useState<string>("John Doe");

  return (
    <div>
      <ChangeName currentName={name} onUpdateName={setName} />
    </div>
  );
};

export default OptimistWhitFormAction;
`;

const OptimisticWithFormAction = () => {
  return (
    <div>
      <>
        <h2>
          Utilizar <code>useOptimistic</code> con <code>useActionState</code>
        </h2>
        <h3>
          En el siguiente ejemplo, se muestra cómo usar{" "}
          <code>useOptimistic</code> con <code>useActionState</code>.
        </h3>
      </>
      <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
        <SyntaxHighlighter language="tsx" style={darcula}>
          {codeSnippet}
        </SyntaxHighlighter>

        <OptimistWhitFormAction />
      </div>
    </div>
  );
};
export default OptimisticWithFormAction;
