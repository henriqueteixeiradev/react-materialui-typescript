import { Routes, Route, Navigate } from "react-router-dom";
import { NotFound } from "../pages/notfound";
import { useDrawerContext } from "../shared/hooks";
import { About } from "../pages/about";
import { useEffect } from "react";
import { Dashboard } from "../pages";

export function AppRoutes() {
  const { setDrawerOptions } = useDrawerContext();

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
      <Route path="/" element={<Dashboard />} />
      <Route path="/sobre" element={<About />} />
      <Route path="/notfound" element={<NotFound />} />
      <Route path="*" element={<Navigate to="/notfound" />} />
    </Routes>
  );
}
