import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { SquidStyleProvider, Style } from "@inkblot-therapy/squid";
import "@inkblot-therapy/squid/output/styles.css";
import "./index.css";
import App from "./App.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <SquidStyleProvider branding="base">
      <App />
      <Style />
    </SquidStyleProvider>
  </StrictMode>
);
