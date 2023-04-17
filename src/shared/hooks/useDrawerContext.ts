import { useContext } from "react";
import { DrawerContext } from "../contexts/";

export const useDrawerContext = () => {
  return useContext(DrawerContext);
};
