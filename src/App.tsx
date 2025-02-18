import { ThemeProvider } from "styled-components";

import { Typography } from "./components/ui/Typography/Typography";
import { GlobalStyles } from "./styles/globalStyles";
import { theme } from "./styles/theme";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />

      <Typography variant="h1">Hello, World!</Typography>
    </ThemeProvider>
  );
}

export default App;
