"use client";

import Image from "next/image";
import styles from "./page.module.css";
import reactSvg from "../public/react.svg";
import NewUseTransition from "./React19Changes/NewUseTransition";
import AutomaticBatching from "./React19Changes/AutomaticBatching";
import NewUseActionState from "./React19Changes/NewUseActionState";
import NewUseFormStatus from "./React19Changes/NewUseFormStatus";
import NewUseOptimistic from "./React19Changes/NewUseOptimistic";
import NewUseApi from "./React19Changes/newUseApi";
import OptimisticWithFormAction from "./React19Changes/OptimistickWhitFromAction";
import ContextChange from "./React19Changes/ContextChanges";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <section
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            gap: "1rem",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
              gap: "1rem",
            }}
          >
            <h1>React 19 Updates</h1>
            <Image src={reactSvg} alt="Vite Logo" />
          </div>
          <div>
            <h3>
              Aqui encontraras los cambios mas importantes de esta nueva
              version, para que puedas estar al tanto de las nuevas
              caracteristicas y mejoras.
            </h3>
            <h3
              style={{
                marginTop: "1rem",
              }}
            >
              Para mas informacion visita el siguiente enlace:{" "}
              <a
                href="https://es.react.dev/blog/2024/12/05/react-19"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  color: "blue",
                  textDecoration: "underline",
                }}
              >
                React 19
              </a>
            </h3>
          </div>
        </section>
        <section>
          <AutomaticBatching />
        </section>

        <section>
          <NewUseTransition />
        </section>
        <section>
          <NewUseActionState />
        </section>
        <section>
          <NewUseFormStatus />
        </section>
        <section>
          <NewUseOptimistic />
        </section>
        <section>
          <OptimisticWithFormAction />
        </section>
        <section>
          <NewUseApi />
        </section>
        <section>
          <ContextChange />
        </section>
      </main>
    </div>
  );
}
