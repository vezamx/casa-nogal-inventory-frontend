import React, {
  createContext,
  ReactNode,
  useState,
  Dispatch,
  SetStateAction,
} from "react";

interface IDeleteProductContext {
  comandas: any[];
  setComandas: Dispatch<SetStateAction<any[]>>; //Buscar el tipo de datos para cambiarlo
  isDeletedProduct: boolean;
}

export const DeleteProductContext = createContext<IDeleteProductContext | null>(
  {
    comandas: [],
    setComandas: () => {},
    isDeletedProduct: false,
  }
);

export const DeleteProductContextProvider = ({
  children,
}: {
  children: ReactNode;
}) => {
  const [comandas, setComandas] = useState<any[]>([]); // funcion para borrar producto

  return (
    <DeleteProductContext.Provider
      value={{
        comandas,
        setComandas,
        isDeletedProduct: false,
      }}
    >
      {children}
    </DeleteProductContext.Provider>
  );
};
