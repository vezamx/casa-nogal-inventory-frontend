import OperationsSection from "@/app/components/sideBars/OperationsSection";
import SelectedOrderSection from "@/app/components/sideBars/SelectedOrderSection";
import { selectedOrderContext } from "@/app/context/SelectedOrderContext";
import { FC, useContext } from "react";

interface OperationsButtonsProps {}

export const OperationsButtons: FC<OperationsButtonsProps> = (props) => {
  const { selectedOrder } = useContext(selectedOrderContext);
  return (
    <>{!!selectedOrder ? <SelectedOrderSection /> : <OperationsSection />}</>
  );
};
