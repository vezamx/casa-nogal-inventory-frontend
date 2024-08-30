import { Flex, StackDivider, Text, VStack } from "@chakra-ui/react";
import { Dispatch, SetStateAction } from "react";
import OrderListButton from "../../Buttons/OrderListButton";

interface OrderListSectionProps {
  selectedOrder: string;
  setSelectedOrder: Dispatch<SetStateAction<string>>;
}

const OrderListSection: React.FC<OrderListSectionProps> = ({
  selectedOrder,
  setSelectedOrder,
}) => {
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
          <OrderListButton
            orderName="Orden 1"
            onClick={() => {
              if (selectedOrder !== "Orden 1") handleOrderClick("Orden 1");
              else handleOrderClick("");
            }}
            isSelected={selectedOrder === "Orden 1"}
          />
          <OrderListButton orderName="Orden 2" />
        </VStack>
      </Flex>
    </Flex>
  );
};

export default OrderListSection;
