import { Flex, VStack, StackDivider, Text, Link } from "@chakra-ui/react";
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

  //no se si sirve pero se supone que es para formar los VStacks
  // useEffect(() =>{
  //   fetch(`${process.env.NEXT_PUBLIC_API_URL}/comandas`)
  //     .then((response) => response.json())
  //     .then((data) => setComanda(data))
  //     .catch(error => console.error('Error al traer la comandas:', error));
  // }, []);

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
      <Link href="#" > 
      <VStack
        width={"18%"}
        minWidth="200px"
        divider={<StackDivider style={{ margin: 0 }} p={0} />}
        bgColor={"white"}
      >
        <Text>Categoría 1</Text>
      </VStack>
      </Link>

      <Link href="#"> 
      <VStack
        width={"18%"}
        minWidth="200px"
        divider={<StackDivider style={{ margin: 0 }} p={0} />}
        bgColor={"white"}
      >
        <Text>Categoría 2</Text>
      </VStack>
      </Link>

      <Link href="#"> 
      <VStack
        width={"18%"}
        minWidth="200px"
        divider={<StackDivider style={{ margin: 0 }} p={0} />}
        bgColor={"white"}
      >
        <Text>Categoría 3</Text>
      </VStack>
      </Link>

      <Link href="#"> 
      <VStack
        width={"18%"}
        minWidth="200px"
        divider={<StackDivider style={{ margin: 0 }} p={0} />}
        bgColor={"white"}
      >
        <Text>Categoría 4</Text>
      </VStack>
      </Link>

      <Link href="#"> 
      <VStack
        width={"18%"}
        minWidth="200px"
        divider={<StackDivider style={{ margin: 0 }} p={0} />}
        bgColor={"white"}
      >
        <Text>Categoría 5</Text>
      </VStack>
      </Link>

      <Link href="#"> 
      <VStack
        width={"18%"}
        minWidth="200px"
        divider={<StackDivider style={{ margin: 0 }} p={0} />}
        bgColor={"white"}
      >
        <Text>Categoría 6</Text>
      </VStack>
      </Link>

      <Link href="#"> 
      <VStack
        width={"18%"}
        minWidth="200px"
        divider={<StackDivider style={{ margin: 0 }} p={0} />}
        bgColor={"white"}
      >
        <Text>Categoría 7</Text>
      </VStack>
      </Link>

      <Link href="#"> 
      <VStack
        width={"18%"}
        minWidth="200px"
        divider={<StackDivider style={{ margin: 0 }} p={0} />}
        bgColor={"white"}
      >
        <Text>Categoría 8</Text>
      </VStack>
      </Link>

      <Link href="#"> 
      <VStack
        width={"18%"}
        minWidth="200px"
        divider={<StackDivider style={{ margin: 0 }} p={0} />}
        bgColor={"white"}
      >
        <Text>Categoría 9</Text>
      </VStack>
      </Link>

      <Link href="#"> 
      <VStack
        width={"18%"}
        minWidth="200px"
        divider={<StackDivider style={{ margin: 0 }} p={0} />}
        bgColor={"white"}
      >
        <Text>Categoría 10</Text>
      </VStack>
      </Link>
    </Flex>
  );
};

export default OrderListSection;
