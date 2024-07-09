"use client";
import MenuButton from "@/app/components/menuButton/MenuButton";
import { YellowLine } from "@/app/components/yellowLine/YellowLine";
import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  Select,
  Table,
  TableCaption,
  TableContainer,
  Tbody,
  Td,
  Text,
  Tfoot,
  Th,
  Thead,
  Tr
} from "@chakra-ui/react";
import { useState } from "react";

const Inventory = () => {
  const [addNewproduct, setAddNewProduct] = useState(false);
  const [showStock, setShowStock] = useState(false);

  const showFormProduct = (addNewproduct: boolean) => {
    console.log(addNewproduct)
    setAddNewProduct(!addNewproduct);
    setShowStock(false);
  };

  const showFormStock = (showStock: boolean) => {
    console.log(showStock)
    setShowStock(!showStock);
    setAddNewProduct(false);
  };

  return (
    <Box w="full">
      <Box className="bg-customGray mb-0">
        {/* no toma bg='customGray*/}
        <Box>
          <MenuButton />
          <YellowLine />
        </Box>
      </Box>
      <Box m={4} textAlign="center">
        <Select placeholder="Seleccionar categoría" bg="customYellow">
          <option value="option1">Categoría 1</option>
          <option value="option2">Categoría 2</option>
          <option value="option3">Categoría 3</option>
        </Select>
        <Button
          colorScheme="yellow"
          color="black"
          mt={6}
          mr={6}
          onClick={() => showFormProduct(addNewproduct)}
        >
          Agregar producto
        </Button>
        <Button
          colorScheme="yellow"
          color="black"
          mt={6}
          mr={6}
          onClick={() => showFormStock(showStock)}
        >
          Mostrar existencia
        </Button>
      </Box>
      <Box>
        {addNewproduct && (
          <Box m={4} textAlign="center">
            <FormControl>
              <FormLabel>Nombre</FormLabel>
              <Input type="Text" mb={4} />
              <FormLabel>Cantidad</FormLabel>
              <Input type="Text" mb={4} />
              <FormLabel>Unidad de medida</FormLabel>
              <Input type="number" mb={4} />
              <FormLabel>Descripción</FormLabel>
              <Input type="Text" mb={4} />
              <FormLabel>Proveedor</FormLabel>
              <Input type="Text" mb={4} />
              <Button colorScheme="yellow" color="black">
                Agregar
              </Button>
            </FormControl>
          </Box>
        )}
        {showStock && (
          <Box m={4} textAlign="center">
            <TableContainer>
              <Table variant="simple">
                <TableCaption>
                  <Text fontSize='2xl' as='b'>Stock Actual</Text>
                </TableCaption>
                <Thead>
                  <Tr>
                    <Th>Nombre</Th>
                    <Th>Cantidad</Th>
                    <Th>Unidad de medida</Th>
                    <Th>Descripción</Th>
                    <Th>Proveedor</Th>
                  </Tr>
                </Thead>
                <Tbody>
                  <Tr>
                    <Td>Tomates</Td>
                    <Td>10</Td>
                    <Td>KG</Td>
                    <Td>Tomate bola</Td>
                    <Td>Vegetales del norte</Td>
                  </Tr>
                  <Tr>
                  <Td>Cebolla</Td>
                    <Td>10</Td>
                    <Td>KG</Td>
                    <Td>Tomate Morada</Td>
                    <Td>Vegetales del norte</Td>
                  </Tr>
                  <Tr>
                  <Td>Mayonesa</Td>
                    <Td>20</Td>
                    <Td>Latas</Td>
                    <Td>Lata 4.8Kg</Td>
                    <Td>Proveedor restaurates</Td>
                  </Tr>
                </Tbody>
                <Tfoot>
                  <Tr>
                  <Td>Vaso coctyelero</Td>
                    <Td>15</Td>
                    <Td>Cajas</Td>
                    <Td>Vaso de 255ML</Td>
                    <Td>Cristalería Durango</Td>
                  </Tr>
                </Tfoot>
              </Table>
            </TableContainer>
          </Box>
        )}
      </Box>
    </Box>
  );
};

export default Inventory;
