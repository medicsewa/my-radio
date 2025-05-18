import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router";
import "./assets/styles.css";
import TrackerRoutes from "./routes.tsx";

createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <TrackerRoutes />
  </BrowserRouter>
);
