import { createContext, ReactNode, useState, useCallback } from "react";

interface IDrawerContextData {
  isDrawerOpen: boolean;
  toogleDrawerOpen: () => void;
}

type Props = {
  children: ReactNode;
};

export const DrawerContext = createContext({} as IDrawerContextData);

export const DrawerProvider = ({ children }: Props) => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const toogleDrawerOpen = useCallback(() => {
    setIsDrawerOpen((oldDrawerOpen) => !oldDrawerOpen);
  }, []);

  return (
    <DrawerContext.Provider value={{ isDrawerOpen, toogleDrawerOpen }}>
      {children}
    </DrawerContext.Provider>
  );
};
