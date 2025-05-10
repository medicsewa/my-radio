import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./assets/styles.css";
import HomePage from "./pages/home.page.tsx";
import { AudioProvider } from "@/providers/audio-provider";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <AudioProvider>
      <HomePage />
    </AudioProvider>
  </StrictMode>
);
