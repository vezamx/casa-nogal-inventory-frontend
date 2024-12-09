import { ReactNode, createContext, useState } from "react";

interface SelectedContextInterfce {
  selectedOrder: string;
  setSelectedOrder: React.Dispatch<React.SetStateAction<string>>;
  isEditingOrder: boolean;
  setIsEditingOrder: React.Dispatch<React.SetStateAction<boolean>>;
}

export const selectedOrderContext = createContext<SelectedContextInterfce>(
  {} as SelectedContextInterfce,
);

export const SelectedOrderProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [selectedOrder, setSelectedOrder] = useState<string>("");
  const [isEditingOrder, setIsEditingOrder] = useState<boolean>(false);
  return (
    <selectedOrderContext.Provider
      value={{
        selectedOrder,
        setSelectedOrder,
        isEditingOrder,
        setIsEditingOrder,
      }}
    >
      {children}
    </selectedOrderContext.Provider>
  );
};
