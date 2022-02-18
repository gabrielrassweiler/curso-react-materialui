import { Routes } from "./routes";
import { AppThemeProvider } from "./shared/contexts";

export const App = () => {
  return (
    <AppThemeProvider>
      <Routes />
    </AppThemeProvider>
  );
}
