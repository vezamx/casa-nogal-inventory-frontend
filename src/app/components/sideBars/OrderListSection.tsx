import { Flex, VStack, StackDivider, Text } from "@chakra-ui/react";
import OrderListButton from "../Buttons/OrderListButton";
import {
  Dispatch,
  SetStateAction,
  useState,
  // useEffect
} from "react";
import { useQuery } from "@tanstack/react-query";

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

type TProducto = {
  nombre: string;
  descripcion: string;
  costo: number;
}

type TMesa = {
  seccion: string;
  nombre: string;
}

type TComanda = {
  id: string;
  comensales: number;
  status: string;
  productos: TProducto[];
  mesa: TMesa | TMesa[];
};

const OrderListSection: React.FC<OrderListSectionProps> = ({
  selectedOrder,
  setSelectedOrder,
}) => {
  const [comanda, setComanda] = useState<Data[]|null>(null);

  const {
    data,
    isLoading,
    error
  } = useQuery<TComanda[]>({
    queryKey: ["comandas"],
    queryFn: async () => {
      const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/comandas`, {
        method: "GET",
        headers: {
          "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY2ZGNjYmY3MjljNWViYzU0NGRmNGVjYyIsInJvbGVJZCI6IjY2ZGNjYmY3MjljNWViYzU0NGRmNGVjYiIsImlhdCI6MTczMDg1Njg3NiwiZXhwIjoxNzYyMzkyODc2fQ.TIYX2Aj_5kjn0qzSCmmh__BBJ88D3RZqhusjQ8Q7BNM",
          "Content-Type": "application/json",
        },
      });
      const data = await response.json();
      return data;
    }
  });

  const handleOrderClick = (id: string) => {
    setSelectedOrder(id);
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
        >{
          isLoading && <Text>Loading...</Text>
        }
        {
          error && <Text>Error: {error.message}</Text>
        }
          {
            data && data.map((comanda) => (
            <OrderListButton
              key={comanda.id}
              orderName={comanda.comensales}
              onClick={() => {
                if (selectedOrder !== comanda.id) handleOrderClick(comanda.id);
                else handleOrderClick("");
              }}    
              isSelected={selectedOrder === comanda.id}
            />
          )) 
          }
          
        </VStack>
      </Flex>
    </Flex>
  );
};

export default OrderListSection;
