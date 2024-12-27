import { IProduct } from "@/app/types";
import React,
{
  Dispatch,
  createContext,
  ReactNode,
  useState,
  SetStateAction
}
from "react";

interface IAddMenuPageContext {
  setAddProducts: Dispatch<SetStateAction<any[]>>;
  setShowAddMenuPage: Dispatch<SetStateAction<boolean>>;
  products: IProduct[];
  //showAddProductcs: boolean;
  showAddMenuPage: boolean;
}

export const AddMenuPageContext = createContext<IAddMenuPageContext | null>(null);

export const AddMenuContextProvider = ({
  children,
}:{
  children: ReactNode;
}) => {
  const [products, setAddProducts] = useState<IProduct[]>([]);
  const [showAddMenuPage, setShowAddMenuPage] = useState(false);

  return (
    <AddMenuPageContext.Provider
    value={
      {
        setAddProducts,
        setShowAddMenuPage,
        products,
        //showAddProductcs,
        showAddMenuPage,
      }
    }
    >
      {children}
    </AddMenuPageContext.Provider>
  );
}