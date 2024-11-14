import React, {
  createContext,
  ReactNode,
  useState,
  Dispatch,
  SetStateAction,
} from "react";

interface IDivideAccountContext {
  comandas: any[]; //buscar el tipo y cambiarlo
  isItpaid: boolean;
  newOrders: any[];
}

export const DivideAccountContext = createContext<IDivideAccountContext | null>(
  {
    comandas: [],
    isItpaid: false,
    newOrders: [],
  }
);

export const DivideAccountContextProvider = ({
  children,
}: {
  children: ReactNode;
}) => {
  const [comandas, setComandas] = useState<any[]>([]); // funcion para agregar cuentas
  const [isItpaid, setIsItpaid] = useState(false);
  const [newOrders, setNewOrders] = useState<any[]>([]);

  return (
    <DivideAccountContext.Provider
      value={{
        comandas,
        isItpaid,
        newOrders,
      }}
    >
      {children}
    </DivideAccountContext.Provider>
  );
};
