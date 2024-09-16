import {
  createContext,
  ReactNode,
  useState,
  Dispatch,
  SetStateAction,
} from "react";

interface IComandasContextProps {
    comandas: any[];
    setComandas: Dispatch<SetStateAction<any[]>>;
    isPayModalOpen: boolean;//manejo de estado del modal
    openPayModal: () => void;
    closePayModal: () => void;
}

enum EComanda {
  Abierta = "abierta",
  Cerrada = "cerrada",
  Pagada = "pagada",
}

interface IComanda{
  id: string;
  comensales: number;
  status: EComanda;
  mesa: string;
  productos: string[];
  mesasAdjuntas: any [];
}

export const comandasContext = createContext<IComandasContextProps>({
  comandas: [],
  setComandas: () => {},
  isPayModalOpen: false,
  openPayModal: () => {},
  closePayModal: () => {},
});

export const ComandaContextProvider = ({ children }: {children: ReactNode}) =>{
  const [comandas, setComandas] = useState<IComanda[]>([]);
  const [isPayModalOpen, setIsPayModalOpen] = useState(false);
  const openPayModal = () => setIsPayModalOpen(true);
  const closePayModal = () => setIsPayModalOpen(false);

  return (
    <comandasContext.Provider
      value={{
        comandas,
        setComandas,
        isPayModalOpen,
        openPayModal,
        closePayModal,
      }}
    >
      {children}
    </comandasContext.Provider>
  );
};