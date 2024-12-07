import React, {
  createContext,
  ReactNode,
  useState,
  Dispatch,
  SetStateAction,
} from "react";

interface IMenuContext {
  menu: any[]; //buscar el tipo y cambiarlo
  setShowMenu: Dispatch<SetStateAction<any[]>>;
  showMenu: boolean;
}

export const MenuContext = React.createContext<IMenuContext | null>({
  menu: [],
  setShowMenu: () => {},
  showMenu: false,
});

export const MenuContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [showMenu, setShowMenu] = React.useState<any[]>([]); // funcion para agregar cuentas

  return (
    <MenuContext.Provider
      value={{
        menu,
        showMenu,
        setShowMenu,
      }}
    >
      {children}
    </MenuContext.Provider>
  );
};
