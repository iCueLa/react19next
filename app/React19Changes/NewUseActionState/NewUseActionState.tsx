/* eslint-disable @typescript-eslint/no-explicit-any */
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
      <button type="submit" disabled={isPending}>
        Actualizar
      </button>
      {error && <p>{error}</p>}
      {isPending && <p style={{ color: "blue" }}>Cargando....</p>}
    </form>
  );
}

export default NewUseActionState;
