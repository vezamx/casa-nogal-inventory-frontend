import React, {
  createContext,
  ReactNode,
  useState,
  Dispatch,
  SetStateAction,
} from "react";

interface IPayContext {
  comandas: any[];
  setComandas: Dispatch<SetStateAction<any[]>>; //Buscar el tipo de datos para cambiarlo
  isPid: boolean; //¿Está pagada?
  individualAccount: boolean; //¿Cuenta se va adividir
  cancelAccount?: boolean; //cuenta cancelada, dar el motivo
  cancellationReason?: string; //motivo de cancelación
}

export const PayContext = createContext<IPayContext | null>({
  comandas: [],
  setComandas: () => {},
  isPid: false,
  individualAccount: false,
});

export const PayContextProvider = ({ children }: { children: ReactNode }) => {
  const [comandas, setComandas] = useState<any[]>([]); // funcion para agregar cuentas

  return (
    <PayContext.Provider
      value={{
        comandas,
        setComandas,
        isPid: false,
        individualAccount: false,
        cancelAccount: false,
        cancellationReason: "",
      }}
    >
      {children}
    </PayContext.Provider>
  );
};
