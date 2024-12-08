import { Flex, VStack, StackDivider, Text } from "@chakra-ui/react";
import OrderListButton from "../Buttons/OrderListButton";
import { useContext } from "react";
import { IComanda } from "@/app/types";
import { selectedOrderContext } from "@/app/context/SelectedOrderContext";

interface OrderListSectionProps {
  orderList: IComanda[];
}

const OrderListSection: React.FC<OrderListSectionProps> = ({ orderList }) => {
  const { selectedOrder, setSelectedOrder } = useContext(selectedOrderContext);

  const handleOrderClick = (orderName: string) => {
    setSelectedOrder(orderName);
  };

  return (
    <Flex w="50%" as={"section"} flexDir={"column"} height="100%">
      <Text fontSize="xl" fontWeight="bold" mb={4}>
        Ordenes activas
      </Text>
      <Flex bgColor="white" w="100%" h="100%">
        <VStack
          width={"100%"}
          divider={
            <StackDivider
              style={{
                margin: 0,
              }}
              p={0}
            />
          }
          pt={2}
          gap={0}
        >
          {orderList.map((order) => (
            <OrderListButton
              key={order.id}
              orderName={order.documentId}
              onClick={() => {
                if (selectedOrder !== order.documentId)
                  handleOrderClick(order.documentId);
                else handleOrderClick("");
              }}
              isSelected={selectedOrder === order.documentId}
            />
          ))}
        </VStack>
      </Flex>
    </Flex>
  );
};

export default OrderListSection;
