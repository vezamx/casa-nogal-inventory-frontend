import { createContext } from "react";

interface IComandasContextProps {
    comandas: any[];
    setComandas: React.Dispatch<React.SetStateAction<any[]>>;
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
  setComandas: () => {}
});