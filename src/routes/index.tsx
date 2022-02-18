import { Button } from "@mui/material";
import { BrowserRouter, Routes as RoutesApp, Route, Navigate } from "react-router-dom";
import { useAppThemeContext } from "../shared/contexts";

export const Routes = () => {
  const { toggleTheme } = useAppThemeContext();

  return (
    <BrowserRouter>
      <RoutesApp>
        {/* Contained = deixa o botao preenchido e nao transparente */}
        <Route path="/" element={<Button variant="contained" onClick={toggleTheme}>Toogle Theme</Button>}/>
        <Route path="*" element={<Navigate to="/"/>}/>
      </RoutesApp>
    </BrowserRouter>
  );
};