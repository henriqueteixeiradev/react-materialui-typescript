import { Routes, Route, Navigate } from "react-router-dom";
import { NotFound } from "../pages/notfound";

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<h1>Home</h1>} />
      <Route path="/notfound" element={<NotFound />} />
      <Route path="*" element={<Navigate to="/notfound" />} />
    </Routes>
  );
}
