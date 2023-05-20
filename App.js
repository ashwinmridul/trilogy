import React from "react";
import { DEFAULT_DARK_THEME } from "./src/theme/DefaultDark.theme";
import { ThemeProvider } from "./src/theme/Theme.context";
import Container from "./src/components/Container";

export default React.memo(() => {
  return (
    <ThemeProvider initial={DEFAULT_DARK_THEME}>
      <Container />
    </ThemeProvider>
  );
});