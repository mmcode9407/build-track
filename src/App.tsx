import { QueryClientProvider } from "@tanstack/react-query";
import { RouterProvider } from "@tanstack/react-router";

import { ThemeProvider } from "@/components/Theme/ThemeProvider";
import { queryClient } from "@/libs/queryClient";
import { router } from "@/libs/router";
import { GlobalStyles } from "@/styles/globalStyles";

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider>
        <GlobalStyles />

        <RouterProvider router={router} />
      </ThemeProvider>
    </QueryClientProvider>
  );
}

export default App;
