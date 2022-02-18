import { ThemeProvider } from "@emotion/react";
import { Routes } from "./routes";
import { LightTheme } from "./shared/themes";

export const App = () => {
  return (
    <ThemeProvider theme={LightTheme}>
      <Routes />
    </ThemeProvider>
  );
}
