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
    <Flex
      w="100%"
      as={"section"}
      height="20%"
      wrap="wrap"
      gap={6}
      flexDir={"row"}
      justifyContent="flex-start"
    >
      {/* Primer VStack */}
      <VStack
        width={"18%"}  // Ajustar ancho para que quepan 5 elementos
        minWidth="200px" // Ancho mínimo para pantallas pequeñas
        divider={<StackDivider style={{ margin: 0 }} p={0} />}
        bgColor={"white"}
      >
        <Text>Categoría 1</Text>
      </VStack>

      {/* Segundo VStack */}
      <VStack
        width={"18%"}
        minWidth="200px"
        divider={<StackDivider style={{ margin: 0 }} p={0} />}
        bgColor={"white"}
      >
        <Text>Categoría 2</Text>
      </VStack>

      {/* Tercer VStack */}
      <VStack
        width={"18%"}
        minWidth="200px"
        divider={<StackDivider style={{ margin: 0 }} p={0} />}
        bgColor={"white"}
      >
        <Text>Categoría 3</Text>
      </VStack>

      {/* Cuarto VStack */}
      <VStack
        width={"18%"}
        minWidth="200px"
        divider={<StackDivider style={{ margin: 0 }} p={0} />}
        bgColor={"white"}
      >
        <Text>Categoría 4</Text>
      </VStack>

      {/* Quinto VStack */}
      <VStack
        width={"18%"}
        minWidth="200px"
        divider={<StackDivider style={{ margin: 0 }} p={0} />}
        bgColor={"white"}
      >
        <Text>Categoría 5</Text>
      </VStack>

      {/* Sexto VStack */}
      <VStack
        width={"18%"}
        minWidth="200px"
        divider={<StackDivider style={{ margin: 0 }} p={0} />}
        bgColor={"white"}
      >
        <Text>Categoría 6</Text>
      </VStack>

      {/* Séptimo VStack */}
      <VStack
        width={"18%"}
        minWidth="200px"
        divider={<StackDivider style={{ margin: 0 }} p={0} />}
        bgColor={"white"}
      >
        <Text>Categoría 7</Text>
      </VStack>

      {/* Octavo VStack */}
      <VStack
        width={"18%"}
        minWidth="200px"
        divider={<StackDivider style={{ margin: 0 }} p={0} />}
        bgColor={"white"}
      >
        <Text>Categoría 8</Text>
      </VStack>

      {/* Noveno VStack */}
      <VStack
        width={"18%"}
        minWidth="200px"
        divider={<StackDivider style={{ margin: 0 }} p={0} />}
        bgColor={"white"}
      >
        <Text>Categoría 9</Text>
      </VStack>

      {/* Décimo VStack */}
      <VStack
        width={"18%"}
        minWidth="200px"
        divider={<StackDivider style={{ margin: 0 }} p={0} />}
        bgColor={"white"}
      >
        <Text>Categoría 10</Text>
      </VStack>
    </Flex>
  );
};

export default OrderListSection;
/*
import { Flex, VStack, StackDivider, Text } from "@chakra-ui/react";
import { Dispatch, SetStateAction, useState, useEffect } from "react";

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
  const [comanda, setComanda] = useState<Data[] | null>(null);

  useEffect(() => {
    fetch(`${process.env.NEXT_PUBLIC_API_URL}/comandas`)
      .then((response) => response.json())
      .then((data) => setComanda(data))
      .catch((error) => console.error("Error al traer las comandas:", error));
  }, []);

  const handleOrderClick = (orderName: string) => {
    setSelectedOrder(orderName);
  };

  return (
    <Flex
      w="100%"           // Ancho completo del contenedor
      wrap="wrap"        // Permite que los elementos pasen a la siguiente fila cuando no haya espacio
      gap={6}            // Espacio entre los VStack
      justifyContent="flex-start" // Alinear los elementos a la izquierda
    >
      {[...Array(20).keys()].map((item, index) => (
        <VStack
          key={index}
          width={"18%"}  // Ajusta el ancho de los elementos para que quepan 5 en una fila
          minWidth="200px" // Asegura que los elementos tengan un mínimo ancho
          divider={<StackDivider style={{ margin: 0 }} p={0} />}
        >
          <Text>{`Categoría ${index + 1}`}</Text>
        </VStack>
      ))}
    </Flex>
  );
};

export default OrderListSection;
*/