import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { MUIProvider } from "./components/providers";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <MUIProvider>
      <App />
    </MUIProvider>
  </React.StrictMode>
);
