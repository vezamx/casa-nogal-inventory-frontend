import { createContext, useState } from "react";
import { TInsumo } from "../types";

interface SelectOperationItemContextProps {
  selectedInsumo: TInsumo | null;
  setSelectedInsumo: (insumo: TInsumo) => void;
}

export const SelectOperationItemContext =
  createContext<SelectOperationItemContextProps>({
    selectedInsumo: null,
    setSelectedInsumo: () => {},
  });

export const SelectedOperationItemProvider: React.FC<{
  children: React.ReactNode;
}> = ({ children }) => {
  const [selectedInsumo, setSelectedInsumo] = useState<TInsumo | null>(null);

  return (
    <SelectOperationItemContext.Provider
      value={{ selectedInsumo, setSelectedInsumo }}
    >
      {children}
    </SelectOperationItemContext.Provider>
  );
};
