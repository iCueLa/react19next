"use client";

import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { darcula } from "react-syntax-highlighter/dist/esm/styles/prism";
import NewUseActionState from "./NewUseActionState";

const codeSnippet = `
"use client";

import { useActionState } from "react";

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

function NewUseActionState() {
  const [error, submitAction, isPending] = useActionState(
    async (previousState, formData) => {
      const error = await updateName(formData.get("name"));
      if (error) {
        // En este condicional podemos aplicar cualquier accion en el caso de que haya un error,
        // ademas podemos retornar el error en el caso de que lo haya
        return error;
      }
      return null;
    },
    null
  );

  return (
    <form action={submitAction}>
      <input type="text" name="name" />
      <button type="submit" disabled={isPending}>
        Actualizar
      </button>
      {error && <p>{error}</p>}
      {isPending && <p style={{ color: "blue" }}>Cargando....</p>}
    </form>
  );
}

export default NewUseActionState;

`;

const index = () => {
  return (
    <div>
      <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
        <h2>
          Nuevo <code>useActionState</code>
        </h2>
        <h3>
          Este hook es similar a <code>useTransition</code> pero con la ventaja
          de que puedes manejar errores y estados de carga de manera más
          sencilla.
        </h3>
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
        <SyntaxHighlighter language="tsx" style={darcula}>
          {codeSnippet}
        </SyntaxHighlighter>
        <h2>
          Ejemplo de uso de <code>useActionState</code>
        </h2>
        <NewUseActionState />
      </div>
    </div>
  );
};
export default index;
