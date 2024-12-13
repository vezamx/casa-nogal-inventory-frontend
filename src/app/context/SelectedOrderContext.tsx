import { ReactNode, createContext, useState } from "react";
import { IProductList } from "../types";

interface EditDataProps {
  isEditing: boolean;
  editData: IProductList[];
}

interface SelectedContextInterfce {
  selectedOrder: string;
  setSelectedOrder: React.Dispatch<React.SetStateAction<string>>;
  isEditingOrder: EditDataProps;
  setIsEditingOrder: React.Dispatch<React.SetStateAction<EditDataProps>>;
  handleChangeisEditing: (products?: IProductList[]) => void;
}

export const selectedOrderContext = createContext<SelectedContextInterfce>(
  {} as SelectedContextInterfce,
);

export const SelectedOrderProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [selectedOrder, setSelectedOrder] = useState<string>("");
  const [isEditingOrder, setIsEditingOrder] = useState<{
    isEditing: boolean;
    editData: IProductList[];
  }>({ isEditing: false, editData: [] });

  const handleChangeisEditing = () => {
    setIsEditingOrder((prev) => ({
      ...prev,
      isEditing: !prev.isEditing,
    }));
  };

  return (
    <selectedOrderContext.Provider
      value={{
        selectedOrder,
        setSelectedOrder,
        isEditingOrder,
        handleChangeisEditing,
        setIsEditingOrder,
      }}
    >
      {children}
    </selectedOrderContext.Provider>
  );
};
