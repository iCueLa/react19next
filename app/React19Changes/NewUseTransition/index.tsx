"use client";

import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { darcula } from "react-syntax-highlighter/dist/esm/styles/prism";
import NewUseTransition from "./NewUseTransition";

const codeSnippet = `
"use client";

import { useState, useTransition } from "react";

const updateName = async (name: string): Promise<string | null> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      if (name === "error") {
        resolve("El nombre no puede ser 'error'");
      } else {
        resolve(null);
      }
    }, 20000);
  });
};

const NewUseTransition = () => {
  const [name, setName] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [isPending, startTransition] = useTransition();

  const handleSubmit = () => {
    startTransition(async () => {
      const error = await updateName(name);
      if (error) {
        setError(error);
        return;
      }
      alert("El nombre se ha actualizado correctamente");
    });
  };


  return (
    <div>
      <input
        value={name}
        onChange={(event) => setName(event.target.value)}
        style={{
          borderColor: isPending ? "blue" : "black",
        }}
      />
      <button
        onClick={handleSubmit}
        disabled={isPending}
        style={{
          backgroundColor: (isPending && "grey") || "blue",
        }}
      >
        Update
      </button>
      {error && <p>{error}</p>}
      {isPending && <p style={{ color: "blue" }}>Actualizando nombre...</p>}
    </div>
  );
};

export default NewUseTransition;

`;

const index = () => {
  return (
    <div>
      <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
        <h2>
          Nuevo <code>useTransition</code>
        </h2>
        <h3>
          Este hook permite realizar transiciones de manera más sencilla y con
          menos código.
        </h3>
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
        <SyntaxHighlighter language="tsx" style={darcula}>
          {codeSnippet}
        </SyntaxHighlighter>
        <h2>
          Ejemplo de uso de <code>useTransition</code>
        </h2>
        <NewUseTransition />
      </div>
    </div>
  );
};
export default index;
