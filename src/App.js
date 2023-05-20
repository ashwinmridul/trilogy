import React from "react";
import { DEFAULT_DARK_THEME } from "./theme/DefaultDark.theme";
import { ThemeProvider } from "./theme/Theme.context";
import Container from "./components/Container";

export default React.memo(() => {
  return (
    <ThemeProvider initial={DEFAULT_DARK_THEME}>
      <Container />
    </ThemeProvider>
  );
});
