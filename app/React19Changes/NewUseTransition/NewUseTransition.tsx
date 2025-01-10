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
      <button onClick={handleSubmit} disabled={isPending}>
        Update
      </button>
      {error && <p>{error}</p>}
      {isPending && <p style={{ color: "blue" }}>Actualizando nombre...</p>}
    </div>
  );
};

export default NewUseTransition;
