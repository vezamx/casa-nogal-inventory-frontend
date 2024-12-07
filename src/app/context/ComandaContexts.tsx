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
  isPayModalOpen: boolean;
  openPayModal: () => void;
  closePayModal: () => void;
  onlyMenu: boolean;
  deleteProduct: boolean;
  addProduct: boolean;
  setOnlyMenu: (value: boolean) => void;
  setDeleteProduct: (value: boolean) => void;
  setAddProduct: (value: boolean) => void;
  payModalMode: "pay" | "split"; // Estado del modo del modal
  setPayModalMode: (mode: "pay" | "split") => void; // Función para cambiar el modo
  products: any[];
  newProduct: (product: any) => void;
}

// Contexto inicializado con valores predeterminados
export const comandasContext = createContext<IComandasContextProps>({
  comandas: [],
  setComandas: () => {},
  isPayModalOpen: false,
  openPayModal: () => {},
  closePayModal: () => {},
  onlyMenu: false,
  deleteProduct: false,
  addProduct: false,
  setOnlyMenu: () => {},
  setDeleteProduct: () => {},
  setAddProduct: () => {},
  payModalMode: "pay", // Valor predeterminado
  setPayModalMode: () => {},
  products: [],
  newProduct: () => {},
});

export const ComandaContextProvider = ({
  children,
}: {
  children: ReactNode;
}) => {
  const [comandas, setComandas] = useState<any[]>([]);
  const [isPayModalOpen, setIsPayModalOpen] = useState(false);
  const [onlyMenu, setOnlyMenu] = useState(false);
  const [deleteProduct, setDeleteProduct] = useState(false);
  const [addProduct, setAddProduct] = useState(false);
  const [payModalMode, setPayModalMode] = useState<"pay" | "split">("pay"); //Inicializado en 'pay'
  const [products, setProducts] = useState<any[]>([]);
  const openPayModal = () => setIsPayModalOpen(true);

  // Función para cerrar el modal
  const closePayModal = () => setIsPayModalOpen(false);

  //funcion para agregar productos
  const newProduct = (product: any) => {
    setProducts([...products, product]);
  };

  return (
    <comandasContext.Provider
      value={{
        comandas,
        setComandas,
        isPayModalOpen,
        openPayModal,
        closePayModal,
        onlyMenu,
        deleteProduct,
        addProduct,
        setOnlyMenu,
        setDeleteProduct,
        setAddProduct,
        payModalMode, // Estado del modo del modal
        setPayModalMode, // Función para cambiar el modo del modal
        products,
        newProduct,
      }}
    >
      {children}
    </comandasContext.Provider>
  );
};
