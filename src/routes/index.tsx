import { Button } from "@mui/material";
import { BrowserRouter, Routes as RoutesApp, Route, Navigate } from "react-router-dom";

export const Routes = () => {
  return (
    <BrowserRouter>
      <RoutesApp>
        <Route path="/" element={<Button>Button</Button>}/>
        <Route path="*" element={<Navigate to="/"/>}/>
      </RoutesApp>
    </BrowserRouter>
  );
};