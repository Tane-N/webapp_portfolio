import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { MantineProvider } from "@mantine/core";
import { theme } from "./theme";
import "@mantine/core/styles.css";
import "@mantine/carousel/styles.css";
import { emotionTransform, MantineEmotionProvider } from "@mantine/emotion";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <MantineProvider
      theme={theme}
      defaultColorScheme="dark"
      stylesTransform={emotionTransform}
    >
      <MantineEmotionProvider>
        <App />
      </MantineEmotionProvider>
    </MantineProvider>
  </React.StrictMode>
);
