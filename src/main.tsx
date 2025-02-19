import { createRouter, RouterProvider } from "@tanstack/react-router";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { ThemeProvider } from "styled-components";

import { routeTree } from "./routeTree.gen";
import { GlobalStyles } from "./styles/globalStyles";
import { theme } from "./styles/theme";

const router = createRouter({ routeTree, scrollRestoration: true });

declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}

const rootElement = document.getElementById("root")!;

if (!rootElement.innerHTML) {
  const root = createRoot(rootElement);

  root.render(
    <StrictMode>
      <ThemeProvider theme={theme}>
        <GlobalStyles />

        <RouterProvider router={router} />
      </ThemeProvider>
    </StrictMode>,
  );
}
