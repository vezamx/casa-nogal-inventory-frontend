// import {
//   createContext,
//   ReactNode,
//   useState,
//   Dispatch,
//   SetStateAction,
// } from "react";

// interface IComandasContextProps {
//   comandas: any[];
//   setComandas: Dispatch<SetStateAction<any[]>>;
//   isPayModalOpen: boolean; // manejo de estado del modal
//   openPayModal: () => void;
//   closePayModal: () => void;
//   onlyMenu: boolean; // para mostrar solo el menú
//   deleteProduct: boolean; // muestra el icono de borrado
//   addProduct: boolean; // para agregar productos
//   setOnlyMenu: (value: boolean) => void;
//   setDeleteProduct: (value: boolean) => void;
//   setAddProduct: (value: boolean) => void;
// }

// enum EComanda {
//   Abierta = "abierta",
//   Cerrada = "cerrada",
//   Pagada = "pagada",
// }

// interface IComanda {
//   id: string;
//   comensales: number;
//   status: EComanda;
//   mesa: string;
//   productos: string[];
//   mesasAdjuntas: any[];
// }

// export const comandasContext = createContext<IComandasContextProps>({
//   comandas: [],
//   setComandas: () => {},
//   isPayModalOpen: false,
//   openPayModal: () => {},
//   closePayModal: () => {},
//   onlyMenu: false,
//   deleteProduct: false,
//   addProduct: false,
//   setOnlyMenu: () => {},
//   setDeleteProduct: () => {},
//   setAddProduct: () => {},
// });

// export const ComandaContextProvider = ({
//   children,
// }: {
//   children: ReactNode;
// }) => {
//   const [comandas, setComandas] = useState<IComanda[]>([]);
//   const [isPayModalOpen, setPayModalOpen] = useState(false);
//   const [onlyMenu, setOnlyMenu] = useState(false);
//   const [deleteProduct, setDeleteProduct] = useState(false);
//   const [addProduct, setAddProduct] = useState(false);

//   const openPayModal = () => setPayModalOpen(true);
//   const closePayModal = () => setPayModalOpen(false);

//   return (
//     <comandasContext.Provider
//       value={{
//         comandas,
//         setComandas,
//         isPayModalOpen,
//         openPayModal,
//         closePayModal,
//         onlyMenu,
//         setOnlyMenu,
//         deleteProduct,
//         setDeleteProduct,
//         addProduct,
//         setAddProduct,
//       }}
//     >
//       {children}
//     </comandasContext.Provider>
//   );
// };
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
  openPayModal: (type: 'pay' | 'divide') => void;
  closePayModal: () => void;
  modalType: 'pay' | 'divide';
  onlyMenu: boolean;
  deleteProduct: boolean;
  addProduct: boolean;
  setOnlyMenu: (value: boolean) => void;
  setDeleteProduct: (value: boolean) => void;
  setAddProduct: (value: boolean) => void;
}

export const comandasContext = createContext<IComandasContextProps>({
  comandas: [],
  setComandas: () => {},
  isPayModalOpen: false,
  openPayModal: () => {},
  closePayModal: () => {},
  modalType: 'pay',
  onlyMenu: false,
  deleteProduct: false,
  addProduct: false,
  setOnlyMenu: () => {},
  setDeleteProduct: () => {},
  setAddProduct: () => {}
});

export const ComandaContextProvider = ({
  children,
}:{
  children: ReactNode
}) =>{
  const [comandas, setComandas] = useState<any[]>([]);
  const [isPayModalOpen, setPayModalOpen] = useState(false);
  const [modalType, setModalType] = useState<'pay' | 'divide'>('pay');
  const [onlyMenu, setOnlyMenu] = useState(false);
  const [deleteProduct, setDeleteProduct] = useState(false);
  const [addProduct, setAddProduct] = useState(false);

  const openPayModal = (type: 'pay' | 'divide') => {
    setModalType(type);
    setPayModalOpen(true);
  };
  
  const closePayModal = () => setPayModalOpen(false);

  return (
    <comandasContext.Provider
      value={{
        comandas,
        setComandas,
        isPayModalOpen,
        openPayModal,
        closePayModal,
        modalType,
        onlyMenu,
        setOnlyMenu,
        deleteProduct,
        setDeleteProduct,
        addProduct,
        setAddProduct,
      }}
    >
      {children}
    </comandasContext.Provider>
  );
};