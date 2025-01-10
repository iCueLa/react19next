"use client";

import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { darcula } from "react-syntax-highlighter/dist/esm/styles/prism";
import AutomaticBatching from "./AutomaticBatching";

const codeSnippet = `
"use client";

import { useState } from "react";

const AutomaticBatching = () => {
  const [count, setCount] = useState(0);
  const [text, setText] = useState("Inicial");

  const handleClick = () => {
    setCount((prev) => prev + 1);
    setText("Actualizado");
    // Solo un render, gracias al batching automático
  };

  return (
    <button onClick={handleClick}>
      {text} - Contador: {count}
    </button>
  );
};

export default AutomaticBatching;

`;

const index = () => {
  return (
    <div>
      <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
        <h2>Automatic Batching</h2>
        <h3>
          En React 19, los cambios de estado se agrupan automáticamente, lo que
          significa que si se realizan múltiples cambios de estado en un solo
          evento, solo se realizará un renderizado.
        </h3>
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
        <SyntaxHighlighter language="tsx" style={darcula}>
          {codeSnippet}
        </SyntaxHighlighter>

        <AutomaticBatching />
      </div>
    </div>
  );
};
export default index;
