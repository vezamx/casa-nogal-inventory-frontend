import { IProduct } from "@/app/types";
import React, {
  Dispatch,
  createContext,
  ReactNode,
  useState,
  SetStateAction,
} from "react";

interface IAddMenuPageContext {
  setProducts: Dispatch<SetStateAction<IProductObj[]>>;
  setShowAddMenuPage: Dispatch<SetStateAction<boolean>>;
  products: IProductObj[];
  showAddMenuPage: boolean;
}

export interface IProductObj {
  product: IProduct;
  quantity: number;
}

export const AddMenuPageContext = createContext<IAddMenuPageContext>({
  setProducts: () => {},
  setShowAddMenuPage: () => {},
  products: [],
  showAddMenuPage: false,
});

export const AddMenuContextProvider = ({
  children,
}: {
  children: ReactNode;
}) => {
  const [products, setProducts] = useState<IProductObj[]>([]);
  const [showAddMenuPage, setShowAddMenuPage] = useState(false);

  return (
    <AddMenuPageContext.Provider
      value={{
        setProducts,
        setShowAddMenuPage,
        products,
        showAddMenuPage,
      }}
    >
      {children}
    </AddMenuPageContext.Provider>
  );
};
