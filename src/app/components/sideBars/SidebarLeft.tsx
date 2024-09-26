import { Box, Flex, Spacer, Text, VStack } from "@chakra-ui/react";
import Logo from "../../components/logo/Logo";
import Image from "next/image";

export const SidebarLeft = () => {
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
      <VStack bgColor={"brand.yellow.light"} w="100%" height={"50%"} pt={4}>
        <OrderProductContainer />
      </VStack>
      <Flex
        flexDir="column"
        w={"100%"}
        h="30%"
        bgColor={"brand.yellow.light"}
        p={5}
        gap={4}
      >
        <PriceDescriptionContainer title="Subtotal" price={100} />
        <PriceDescriptionContainer title="Descuentos" price={100} />
        <Spacer />
        <PriceDescriptionContainer title="Total" price={100} />
      </Flex>
    </Flex>
  );
};

interface PriceDescriptionContainerProps {
  title: string;
  price?: number;
}
const PriceDescriptionContainer: React.FC<PriceDescriptionContainerProps> = ({
  title,
  price = 0,
}) => {
  return (
    <Flex width={"100%"} h={10} bgColor={"white"} align={"center"} px={3}>
      <Text mr={5}>{title}</Text>
      <Text fontWeight={"bold"}>{price}</Text>
    </Flex>
  );
};

interface OrderProductContainerProps {}
const OrderProductContainer: React.FC<OrderProductContainerProps> = () => {
  return (
    <Flex w="100%" px={4}>
      <Box width="20%"></Box>
      <Flex direction={"column"} w={"80%"} gap={2}>
        <Text bgColor={"white"} py={1} px={2} boxShadow={"lg"}>
          Nombre del producto
        </Text>
        <Flex id="numbers-container">
          <Text bgColor="white" py={1} px={2} boxShadow={"lg"}>
            cantidad: 2
          </Text>
        </Flex>
      </Flex>
    </Flex>
  );
};
