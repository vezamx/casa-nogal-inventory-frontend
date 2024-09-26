"use client";

import {
  Flex,
  Box,
  Spacer,
  Select,
  VStack,
  FormControl,
  FormLabel,
  Input,
  InputRightElement,
  Icon,
  InputGroup,
  HStack,
  Text,
} from "@chakra-ui/react";
import { FC, ReactNode } from "react";
import { FaSearch } from "react-icons/fa";

const categories = ["Productos", "Insumos"];

const layout: FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <Flex>
      <Flex bgColor="brand.gray" w={"20%"} h={"100dvh"} flexDir={"column"}>
        {/* Heres the icon  */}

        <VStack px={4} gap={6}>
          <FormControl>
            <FormLabel color={"brand.background"}>Ordenar por</FormLabel>
            <Select placeholder="Ordenar por" bgColor={"brand.background"}>
              <option value="nombre">Menos existencias</option>
              <option value="codigo">Alfabeticamente</option>
              <option value="cantidad">Otro filtro</option>
            </Select>
          </FormControl>
          <FormControl>
            <FormLabel color={"brand.background"}>Buscar</FormLabel>
            <InputGroup>
              <Input
                type="text"
                bgColor={"brand.background"}
                placeholder="Buscar por nombre"
              />
              <InputRightElement>
                <Icon as={FaSearch} color="gray" />
              </InputRightElement>
            </InputGroup>
          </FormControl>
          <FormControl>
            <FormLabel color={"brand.background"}>Tienda</FormLabel>
            <Input
              type="text"
              bgColor={"brand.background"}
              placeholder="Filtrar por tienda"
            />
          </FormControl>

          <FormControl>
            <FormLabel color={"brand.background"}>Código</FormLabel>
            <Input
              type="text"
              bgColor={"brand.background"}
              placeholder="Filtrar por Código"
            />
          </FormControl>

          <FormControl>
            <FormLabel color={"brand.background"}>Categoria</FormLabel>
            <Input
              type="text"
              bgColor={"brand.background"}
              placeholder="Filtrar por Catergoria"
            />
          </FormControl>
        </VStack>
      </Flex>
      <Flex flexDir={"column"} w={"80%"} bgColor="brand.background">
        <Flex h="8%" bgColor={"white"}>
          <HStack paddingX={10}>
            <Flex
              flexDir="column"
              justify={"center"}
              h={"100%"}
              _after={{
                content: '""',
                w: "100%",
                h: "4px",
                bgColor: "brand.yellow.primary",
                position: "relative",
                bottom: "-30%",
              }}
            >
              <Text fontWeight="bold" fontSize={"large"}>
                Productos
              </Text>
            </Flex>
          </HStack>
        </Flex>
        <Box>{children}</Box>
      </Flex>
    </Flex>
  );
};

export default layout;
