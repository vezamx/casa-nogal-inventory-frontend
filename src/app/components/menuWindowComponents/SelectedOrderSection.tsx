import { Box, Grid, useDisclosure, VStack, Text, Flex, StackDivider } from "@chakra-ui/react";
import React, { Dispatch, SetStateAction, useState, useContext } from "react";
import MenuIconButton from "../Buttons/MenuIconButtons";
import { comandasContext } from "../../context/ComandaContexts";

interface SelectedOrderSectionProps {
  setSelectedOrder: Dispatch<SetStateAction<string>>;
}
const SelectedOrderSection = () => {
  // const { openPayModal } = useContext(comandasContext);

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
      <VStack
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
            >
              <Text
                color={"brand.yellow.light"}
                fontSize={"4xl"}
              >
                +
              </Text>
            </Box>
          </Flex>

        </Grid>
      </VStack>

      <VStack
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
            >
              <Text
                color={"brand.yellow.light"}
                fontSize={"4xl"}
              >
                +
              </Text>
            </Box>
          </Flex>

        </Grid>
      </VStack>
      <VStack
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
            >
              <Text
                color={"brand.yellow.light"}
                fontSize={"4xl"}
              >
                +
              </Text>
            </Box>
          </Flex>

        </Grid>
      </VStack>
      <VStack
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
            >
              <Text
                color={"brand.yellow.light"}
                fontSize={"4xl"}
              >
                +
              </Text>
            </Box>
          </Flex>

        </Grid>
      </VStack>
      <VStack
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
            >
              <Text
                color={"brand.yellow.light"}
                fontSize={"4xl"}
              >
                +
              </Text>
            </Box>
          </Flex>

        </Grid>
      </VStack>

      <VStack
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
            >
              <Text
                color={"brand.yellow.light"}
                fontSize={"4xl"}
              >
                +
              </Text>
            </Box>
          </Flex>

        </Grid>
      </VStack>
    </Grid>
  );
};

export default SelectedOrderSection;
