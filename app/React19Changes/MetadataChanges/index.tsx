"use client";

import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { darcula } from "react-syntax-highlighter/dist/esm/styles/prism";

const codeSnippet = `
function BlogPost({post}) {
  return (
    <article>
      <h1>{post.title}</h1>
      <title>{post.title}</title>
      <meta name="author" content="Josh" />
      <link rel="author" href="https://twitter.com/joshcstory/" />
      <meta name="keywords" content={post.keywords} />
      <p>
        Eee equals em-see-squared...
      </p>
    </article>
  );
}
`;

const index = () => {
  return (
    <div>
      <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
        <h2>Etiquetas de Metadata (SEO) de forma nativa </h2>
        <h3>
          En React 19, se pueden agregar etiquetas de metadata de forma nativa
          en los componentes. Esto es útil para mejorar el SEO de la aplicación
          web.
        </h3>
        <h3>
          A continuación, se muestra un ejemplo de cómo se pueden agregar
          etiquetas de metadata en un componente de React
        </h3>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "1rem",
          paddingTop: "1rem",
        }}
      >
        <SyntaxHighlighter language="tsx" style={darcula}>
          {codeSnippet}
        </SyntaxHighlighter>
      </div>
    </div>
  );
};
export default index;
