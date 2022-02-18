import { Button } from "@mui/material";
import { BrowserRouter, Routes as RoutesApp, Route, Navigate } from "react-router-dom";

export const Routes = () => {
  return (
    <BrowserRouter>
      <RoutesApp>
        {/* Contained = deixa o botao preenchido e nao transparente */}
        <Route path="/" element={<Button variant="contained">Button</Button>}/>
        <Route path="*" element={<Navigate to="/"/>}/>
      </RoutesApp>
    </BrowserRouter>
  );
};