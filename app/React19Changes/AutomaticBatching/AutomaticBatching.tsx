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
