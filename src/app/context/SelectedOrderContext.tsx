import { ReactNode, createContext, useState } from "react";

interface SelectedContextInterfce {
  selectedOrder: string;
  setSelectedOrder: React.Dispatch<React.SetStateAction<string>>;
}

export const selectedOrderContext = createContext<SelectedContextInterfce>(
  {} as SelectedContextInterfce,
);

export const SelectedOrderProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [selectedOrder, setSelectedOrder] = useState<string>("");
  return (
    <selectedOrderContext.Provider
      value={{
        selectedOrder,
        setSelectedOrder,
      }}
    >
      {children}
    </selectedOrderContext.Provider>
  );
};
