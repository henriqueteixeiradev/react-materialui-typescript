import { Routes, Route, Navigate } from "react-router-dom";
import { NotFound } from "../pages/notfound";
import { Button } from "@mui/material";
import { useAppThemeContext } from "../shared/hooks";

export function AppRoutes() {
  const { toogleTheme } = useAppThemeContext();

  return (
    <Routes>
      <Route
        path="/"
        element={
          <Button variant="contained" color="primary" onClick={toogleTheme}>
            THEME TOOGLE
          </Button>
        }
      />
      <Route path="/notfound" element={<NotFound />} />
      <Route path="*" element={<Navigate to="/notfound" />} />
    </Routes>
  );
}
