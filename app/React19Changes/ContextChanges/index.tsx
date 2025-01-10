"use client";

import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { darcula } from "react-syntax-highlighter/dist/esm/styles/prism";

const codeSnippetTwo = `
const ThemeContext = createContext('');

function App({children}) {
  return (
    <ThemeContext value="dark">
      {children}
    </ThemeContext>
  );  
}
`;

const codeSnippetOne = `
  const ThemeContext = createContext("");

  function App({ children }) {
    return (
      <ThemeContext.Provider value="dark">
        {children}
      </ThemeContext.Provider>
    );
  }
`;

const index = () => {
  return (
    <div>
      <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
        <h2>Cambios en Context</h2>
        <h3>
          En React 19 ya no se usa el método <b>Provider</b> para pasar el valor
          del contexto, ahora se usa el método value directamente en el
          contexto. Asi que si tenemos varios providers en nuestra aplicación,
          ahora tendremos que migrarlos a la nueva forma de pasar el valor del
          contexto.
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
        <h3>Antes:</h3>
        <SyntaxHighlighter language="tsx" style={darcula}>
          {codeSnippetOne}
        </SyntaxHighlighter>
        <h3>Ahora:</h3>
        <SyntaxHighlighter language="tsx" style={darcula}>
          {codeSnippetTwo}
        </SyntaxHighlighter>
      </div>
    </div>
  );
};
export default index;
