import React, {
  createContext,
  ReactNode,
  useState,
  Dispatch,
  SetStateAction,
} from "react";

interface IAddProductContext {
  comandas: any[];
  setComandas: Dispatch<SetStateAction<any[]>>; //Buscar el tipo de datos para cambiarlo
}

export const AddProductContext = createContext<IAddProductContext | null>({
  comandas: [],
  setComandas: () => {},
});

export const AddProductContextProvider = ({
  children,
}: {
  children: ReactNode;
}) => {
  const [comandas, setComandas] = useState<any[]>([]); // funcion para agregar cuentas

  return (
    <AddProductContext.Provider
      value={{
        comandas,
        setComandas,
      }}
    >
      {children}
    </AddProductContext.Provider>
  );
};
//boton añardir
