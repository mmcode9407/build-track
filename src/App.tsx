import { QueryClientProvider } from "@tanstack/react-query";
import { RouterProvider } from "@tanstack/react-router";

import { ThemeProvider } from "@/components/Theme/ThemeProvider";
import { useAuth } from "@/context/AuthContext/AuthContext";
import { AuthProvider } from "@/context/AuthContext/AuthContext";
import { queryClient } from "@/libs/queryClient";
import { router } from "@/libs/router";
import { GlobalStyles } from "@/styles/globalStyles";

function InnerApp() {
  const auth = useAuth();

  return <RouterProvider router={router} context={{ auth }} />;
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <ThemeProvider>
          <GlobalStyles />

          <InnerApp />
        </ThemeProvider>
      </AuthProvider>
    </QueryClientProvider>
  );
}

export default App;
