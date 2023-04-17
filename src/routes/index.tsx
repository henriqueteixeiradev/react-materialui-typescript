import { Routes, Route, Navigate } from "react-router-dom";
import { NotFound } from "../pages/notfound";
import { Button } from "@mui/material";

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Button>asdasd</Button>} />
      <Route path="/notfound" element={<NotFound />} />
      <Route path="*" element={<Navigate to="/notfound" />} />
    </Routes>
  );
}
