import { IProduct } from "@/app/types";
import React,
{
  Children,
  createContext,
  ReactNode,
  useState
}
from "react";

interface IProductsContext {
  products: IProduct[];
  setAddProducts: React.Dispatch<React.SetStateAction<any[]>>;
  showAddProductcs: boolean;
}

export const ProductsContext = createContext<IProductsContext | null>({
  products: [],
  setAddProducts: () => {},
  showAddProductcs: false,
});

export const ProductsContextPrvider = ({
  children,
}:{
  children: ReactNode;
}) => {
  const [products, setAddProducts] = useState<IProduct[]>([]);
  const [showAddProductcs, setShowAddProducts] = useState(false);

  return (
    <ProductsContext.Provider
      value={{
        products,
        setAddProducts,
        showAddProductcs,
      }}
    >
      {children}
    </ProductsContext.Provider>
  );
}