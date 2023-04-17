import { useContext } from "react";
import { ThemeContext } from "../contexts/ThemeContext";

export const useAppThemeContext = () => {
  return useContext(ThemeContext);
};
