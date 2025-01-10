"use client";

import { Suspense, use } from "react";

const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

interface Comment {
  id: number;
  name: string;
  email: string;
}

const commentsPromise = async (): Promise<Comment[]> => {
  await sleep(5000);
  const comments: Comment[] = [
    { id: 1, name: "Comment 1", email: "test@email" },
    { id: 2, name: "Comment 2", email: "test@email" },
    { id: 3, name: "Comment 3", email: "test@email" },
  ];
  return comments;
};

interface Props {
  commentsPromise: Promise<Comment[]>;
}
function Comments({ commentsPromise }: Props) {
  // "use" Se encarga de manejar la promesa y el estado de la misma
  // Si la promesa se resuelve, el estado de la promesa se actualiza
  const comments = use(commentsPromise);

  return (
    <div>
      {comments.map((comment) => (
        <div key={comment.id}>{comment.name}</div>
      ))}
    </div>
  );
}

const NewUseApi = () => {
  // Se envía la promesa a Comments
  // Al ser una promesa, se mostrará el fallback hasta que la promesa se resuelva

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Comments commentsPromise={commentsPromise()} />
    </Suspense>
  );
};

export default NewUseApi;
