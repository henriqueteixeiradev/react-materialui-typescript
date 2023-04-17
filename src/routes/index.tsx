import { Routes, Route, Navigate } from "react-router-dom";
import { NotFound } from "../pages/notfound";
import { Button } from "@mui/material";
import { useDrawerContext } from "../shared/hooks";
import { About } from "../pages/about";
import { useEffect } from "react";

export function AppRoutes() {
  const { toogleDrawerOpen, setDrawerOptions } = useDrawerContext();

  useEffect(() => {
    setDrawerOptions([
      {
        icon: "home",
        label: "Home",
        path: "/",
      },
      {
        icon: "info",
        label: "Sobre",
        path: "/sobre",
      },
    ]);
  }, []);

  return (
    <Routes>
      <Route
        path="/"
        element={
          <Button
            variant="contained"
            color="primary"
            onClick={toogleDrawerOpen}
          >
            THEME TOOGLE
          </Button>
        }
      />
      <Route path="/" element={<NotFound />} />
      <Route path="/notfound" element={<NotFound />} />
      <Route path="/sobre" element={<About />} />
      <Route path="*" element={<Navigate to="/notfound" />} />
    </Routes>
  );
}
