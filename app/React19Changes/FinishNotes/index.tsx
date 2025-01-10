import SyntaxHighlighter from "react-syntax-highlighter";
import { darcula } from "react-syntax-highlighter/dist/esm/styles/hljs";

const codeSnippetPreloadingRecourses = `
import { prefetchDNS, preconnect, preload, preinit } from 'react-dom'

function MyComponent() {
  preinit('https://.../path/to/some/script.js', {as: 'script' }) // loads and executes this script eagerly
  preload('https://.../path/to/font.woff', { as: 'font' }) // preloads this font
  preload('https://.../path/to/stylesheet.css', { as: 'style' }) // preloads this stylesheet
  prefetchDNS('https://...') // when you may not actually request anything from this host
  preconnect('https://...') // when you will request something but aren't sure what
}
`;

const index = () => {
  return (
    <div style={{ margin: "2rem" }}>
      <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
        <h2>Cambios que tambien se aplicaron en esta version</h2>
        <ul>
          <li>
            <a>
              Los <code>PropTypes</code> como tal dejan de ser soportados en
              React, en el caso de que quieras usar Types en tus componentes,
              deberás usar <code>TypeScript</code> para ello.
            </a>
          </li>

          <li>
            <a>
              Las referencias a los elementos del DOM con <code>ref</code> ahora
              se pueden pasar como props a los componentes.
              <br />
              Este cambio es útil para mejorar la accesibilidad de los
              componentes y para mejorar la integración con librerías de
              terceros.
            </a>
          </li>
          <li>
            <a>
              Se mejoro el soporte Preloading de recursos, esto puede ser útil
              para cargar script, fuentes, imagenes, etc. Ejemplo:
              <br />
              <SyntaxHighlighter language="tsx" style={darcula}>
                {codeSnippetPreloadingRecourses}
              </SyntaxHighlighter>
            </a>
          </li>

          <li>
            <a>
              Se mejoro el manejo de errores en los componentes de React, ahora
              estos no se veran duplicados en la consola del navegador y seran
              mas facil de leer.
            </a>
          </li>

          <li>
            <a>
              Mejoras en el SSR de React, ahora es mas facil de configurar y de
              usar. Como los <code>Server Actions</code> y{" "}
              <code>Server Components</code>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};
export default index;
