import {
  Box,
  Grid,
  useDisclosure,
  VStack,
  Text,
  Flex,
  StackDivider,
} from "@chakra-ui/react";
import React, { Dispatch, SetStateAction, useState, useContext } from "react";
import MenuIconButton from "../Buttons/MenuIconButtons";
import { comandasContext } from "../../context/ComandaContexts";
import { SidebarLeft } from "./SidebarLeft";

interface SelectedOrderSectionProps {
  setSelectedOrder: Dispatch<SetStateAction<string>>;
}
const SelectedOrderSection = () => {
  // const { openPayModal } = useContext(comandasContext);
  const vstacks = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];// seleccionar del las opciones para mostrar en los contenidos useEffect
  const { newProduct } = useContext(comandasContext);

  const handleAddProductClick = (product: any) => {
    newProduct(product);
    console.log(`New product added ${product}`);
  };

  return (
    <Grid
      as={"section"}
      w={"100%"}
      h={"100%"}
      templateColumns={"repeat(2, 1fr)"}
      mt={"10rem"}
      gap={6} // Espacio entre las dos columnas principales
      overflowY={"scroll"}
    >
      {vstacks.map((stack: number) => (
        <VStack
          key={stack}
          w={"90%"}
          h={"350px"}
          bgColor={"brand.yellow.light"}
          rounded={"10px"}
        >
          <Grid
            as={"section"}
            w={"100%"}
            h={"100%"}
            templateColumns={"repeat(2, 1fr)"} // 2 columnas para los productos
            gap={4} // Espacio entre los productos
            mt={"10px"}
          >
            <Box
              w={"90%"} // Toma todo el ancho disponible de la columna
              h={"%"}
              bgColor={"white"}
              rounded={"10px"}
              m={"8%"}
            >
              productos {stack}
            </Box>

            <Flex flexDir={"column"} justify={"center"} align={"center"}>
              <Box
                w={"90%"}
                h={"40%"}
                bgColor={"white"}
                rounded={"10px"}
                mt={"15%"}
                mb={"5%"}
              >
                contenido {stack}
              </Box>
              <Box
                w={"40px"}
                h={"40px"}
                bgColor={"white"}
                cursor={"pointer"}
                rounded={"50px"}
                display={"flex"}
                justifyContent={"center"}
                alignItems={"center"}
                onClick={() => handleAddProductClick(stack)}
              >
                <Text color={"brand.yellow.light"} fontSize={"4xl"} mb={"8px"}>
                  +
                </Text>
              </Box>
            </Flex>
          </Grid>
        </VStack>
      ))}
    </Grid>
  );
};

export default SelectedOrderSection;
