"use client";

/* eslint-disable @typescript-eslint/no-explicit-any */
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
    async (previousState: any, formData: any) => {
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

  // ejemplos de usar optimist con useActionState

  return (
    <form
      action={submitAction}
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "1rem",
      }}
    >
      <h2>Your name is: {optimisticName}</h2>
      <a>
        <label>Change Name:</label>
        <div style={{}}>
          <input
            type="text"
            name="name"
            disabled={currentName !== optimisticName}
          />
          <button type="submit" disabled={isPending}>
            Actualizar
          </button>
        </div>
        {error && <p style={{ color: "red" }}>{error}</p>}
        {isPending && <p style={{ color: "blue" }}>Cargando....</p>}
      </a>
    </form>
  );
}

const OptimistWhitFormAction = () => {
  const [name, setName] = useState<string>("John Doe");

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
      <h1>Ejemplo de optimista con useFormStatus y useOptimistic</h1>
      <ChangeName currentName={name} onUpdateName={setName} />
    </div>
  );
};

export default OptimistWhitFormAction;
