import { AddMenuPageContext } from "@/app/context/AddMenuPageContext";
import { selectedOrderContext } from "@/app/context/SelectedOrderContext";
import { FC, useContext } from "react";
import { OrderItemsSidebar } from "@/app/components/sideBars/ProductsSidebar/SelectedOrderSidebar";
import { Flex } from "@chakra-ui/react";
import Logo from "../../logo/Logo";
import { AddProductSidebar } from "./AddProductsSidebar";

export const ProductsSidebar: FC = () => {
  const { selectedOrder } = useContext(selectedOrderContext);
  const { showAddMenuPage } = useContext(AddMenuPageContext);

  return (
    <Flex
      as={"aside"}
      gap={4}
      h="100vh"
      w="30%"
      className="bg-customYellow -screen  min-w-screen flex flex-col items-center  "
      p={4}
    >
      <Logo className="object-cover" width={200} height={200} />
      {}
      {!!selectedOrder && !showAddMenuPage && <OrderItemsSidebar />}
      {showAddMenuPage && <AddProductSidebar />}
    </Flex>
  );
};
