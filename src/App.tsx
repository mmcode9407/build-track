import { QueryClientProvider } from "@tanstack/react-query";
import { RouterProvider } from "@tanstack/react-router";
import { ThemeProvider } from "styled-components";

import { queryClient } from "@/libs/queryClient";
import { router } from "@/libs/router";
import { GlobalStyles } from "@/styles/globalStyles";
import { theme } from "@/styles/theme";

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={theme}>
        <GlobalStyles />

        <RouterProvider router={router} />
      </ThemeProvider>
    </QueryClientProvider>
  );
}

export default App;
