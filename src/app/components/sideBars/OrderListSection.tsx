import { Flex, VStack, StackDivider, Text } from "@chakra-ui/react";
import OrderListButton from "../Buttons/OrderListButton";
import {
  Dispatch,
  SetStateAction,
  useState,
  useEffect
} from "react";

interface OrderListSectionProps {
  selectedOrder: string;
  setSelectedOrder: Dispatch<SetStateAction<string>>;
}

interface Data {
  message: string;
}

interface OrderListSelections {
  data: Data;
}

const OrderListSection: React.FC<OrderListSectionProps> = ({
  selectedOrder,
  setSelectedOrder,
}) => {
  const [comanda, setComanda] = useState<Data[]|null>(null);

  useEffect(() =>{
    fetch(`${process.env.NEXT_PUBLIC_API_URL}/comandas`)
      .then((response) => response.json())
      .then((data) => setComanda(data))
      .catch(error => console.error('Error al traer la comandas:', error));
  }, []);

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
          {/* <OrderListButton
            orderName="Orden 1"
            onClick={() => {
              if (selectedOrder !== "Orden 1") handleOrderClick("Orden 1");
              else handleOrderClick("");
            }}
            isSelected={selectedOrder === "Orden 1"}
          />
          <OrderListButton orderName="Orden w" /> */}
          {
           comanda && comanda.map((comanda) => (
            <OrderListButton
              key={comanda.id}
              orderName={comanda.comensales}
              onClick={() => {
                if (selectedOrder !== comanda.message) handleOrderClick(comanda.id);
                else handleOrderClick("");
              }}
              isSelected={selectedOrder === comanda.message}
            />
          )) 
          }
          
        </VStack>
      </Flex>
    </Flex>
  );
};

export default OrderListSection;
