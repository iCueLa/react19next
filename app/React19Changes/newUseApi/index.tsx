"use client";

import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { darcula } from "react-syntax-highlighter/dist/esm/styles/prism";
import NewUseApi from "./NewUseApi";

const codeSnippet = `
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

`;

const index = () => {
  return (
    <div>
      <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
        <h2>
          Nueva API <code>use</code>
        </h2>
        <h3>
          <code>use</code> es una nueva API que nos permite manejar promesas de
          manera más sencilla. Al utilizar <code>use</code> en una promesa, se
          maneja el estado de la misma y se actualiza el componente cuando la
          promesa se resuelve.
          <br />
          Esto es útil para manejar la carga de datos de manera más sencilla.
          Ademas interactua con <code>Suspense</code> para mostrar un fallback
        </h3>
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
        <SyntaxHighlighter language="tsx" style={darcula}>
          {codeSnippet}
        </SyntaxHighlighter>
        <h2>
          Ejemplo de uso de la nueva API <code>use</code>
        </h2>
        <NewUseApi />
      </div>
    </div>
  );
};
export default index;
