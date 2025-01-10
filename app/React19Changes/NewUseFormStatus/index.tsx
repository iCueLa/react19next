"use client";

import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { darcula } from "react-syntax-highlighter/dist/esm/styles/prism";
import NewUseFormStatus from "./NewUseFormStatus";

const codeSnippet = `
"use client";

import { useActionState } from "react";
import { useFormStatus } from "react-dom";

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

const FormStatusButton = () => {
  const { pending: isPending } = useFormStatus();

  return (
    <button
      type="submit"
      disabled={isPending}
      style={{
        backgroundColor: isPending ? "grey" : "blue",
        cursor: isPending ? "not-allowed" : "pointer",
      }}
    >
      Actualizar
    </button>
  );
};

function NewUseFormStatus() {
  const [error, submitAction, isPending] = useActionState(
    async (previousState: any, formData: any) => {
      console.log(previousState, formData.get("name"));
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
      <FormStatusButton />
      {error && <p>{error}</p>}
      {isPending && <p style={{ color: "blue" }}>Cargando....</p>}
    </form>
  );
}

export default NewUseFormStatus;


`;

const index = () => {
  return (
    <div>
      <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
        <h2>
          Nuevo <code>useFormStatus</code>
        </h2>
        <h3>
          Este hook es similar a <code>useTransition</code> pero en lugar de
          maneja la transición de un componente, maneja el estado de carga de un
          formulario. Esto es útil para deshabilitar un botón de envío mientras
          se envía un formulario y mostrar un mensaje de carga.
        </h3>
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
        <SyntaxHighlighter language="tsx" style={darcula}>
          {codeSnippet}
        </SyntaxHighlighter>
        <h2>
          Ejemplo de uso de <code>useFormStatus</code>
        </h2>
        <NewUseFormStatus />
      </div>
    </div>
  );
};
export default index;
