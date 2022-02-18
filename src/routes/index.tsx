import { BrowserRouter, Routes as RoutesApp, Route, Navigate } from "react-router-dom";

export const Routes = () => {
  return (
    <BrowserRouter>
      <RoutesApp>
        <Route path="/" element={<p>Hello</p>}/>
        <Route path="*" element={<Navigate to="/"/>}/>
      </RoutesApp>
    </BrowserRouter>
  );
};