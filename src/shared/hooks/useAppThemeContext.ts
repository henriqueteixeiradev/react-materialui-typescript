import { useContext } from "react";
import { ThemeContext } from "../contexts";

export const useAppThemeContext = () => {
  return useContext(ThemeContext);
};
