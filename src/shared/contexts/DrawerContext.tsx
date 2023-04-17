import { createContext, ReactNode, useState, useCallback } from "react";

interface IDrawerOption {
  icon: string;
  label: string;
  path: string;
}

interface IDrawerContextData {
  isDrawerOpen: boolean;
  drawerOptions: IDrawerOption[];
  toogleDrawerOpen: () => void;
  setDrawerOptions: (newDrawerOption: IDrawerOption[]) => void;
}

type Props = {
  children: ReactNode;
};

export const DrawerContext = createContext({} as IDrawerContextData);

export const DrawerProvider = ({ children }: Props) => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [drawerOptions, setDrawerOptions] = useState<IDrawerOption[]>([]);

  const toogleDrawerOpen = useCallback(() => {
    setIsDrawerOpen((oldDrawerOpen) => !oldDrawerOpen);
  }, []);

  const handleSetDrawerOptions = useCallback(
    (newDrawerOption: IDrawerOption[]) => {
      setDrawerOptions(newDrawerOption);
    },
    []
  );

  return (
    <DrawerContext.Provider
      value={{
        drawerOptions,
        isDrawerOpen,
        toogleDrawerOpen,
        setDrawerOptions: handleSetDrawerOptions,
      }}
    >
      {children}
    </DrawerContext.Provider>
  );
};
