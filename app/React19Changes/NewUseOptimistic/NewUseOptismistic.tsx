"use client";

/* eslint-disable @typescript-eslint/no-explicit-any */
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
