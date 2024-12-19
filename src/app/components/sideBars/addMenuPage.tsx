import React, {
  createContext,
  Dispatch,
  SetStateAction,
  useContext,
} from "react";
import {
  Box,
  Button,
  Center,
  Flex,
  Grid,
  GridItem,
  IconButton,
  Image,
  Input,
  Text,
  VStack,
} from "@chakra-ui/react";
import { IProduct } from "@/app/types";
import { FaArrowCircleLeft, FaMinus, FaPlus } from "react-icons/fa";
import { AddMenuPageContext } from "@/app/context/AddMenuPageContext";
import MenuIconButton from "../Buttons/MenuIconButtons";
import { API_HOOKS_QUERY_KEYS } from "@/utils/constants";
import { useApiGetInfo } from "@/app/hooks/useApiCall";

interface IProductsContext {
  setAddProducts: Dispatch<SetStateAction<IProduct[]>>;
  setShowAddProducts: Dispatch<SetStateAction<boolean>>;
  products: IProduct[];
  showAddProductcs: boolean;
}

export const ProductsContext = createContext<IProductsContext | null>(null);

const addMenuPage = () => {
  const AddMenuContext = useContext(AddMenuPageContext);

  if (!AddMenuContext) {
    console.log("Contexto addmenu no disponible");
    return null;
  }

  const { setShowAddMenuPage } = AddMenuContext;

  const categorias = [
    "Categoría 1",
    "Categoría 2",
    "Categoría 3",
    "Categoría 4",
    "Categoría 5",
    "Categoría 6",
    "Categoría 7",
    "Categoría 8",
    "Categoría 9",
    "Categoría 10",
  ];

  const { data, isLoading, refetch } = useApiGetInfo<IProduct>({
    url: `/comandas/`,
    urlKey: [API_HOOKS_QUERY_KEYS.PRODUCTS, AddMenuContext],
    queryProps: {
      enabled: !!AddMenuContext,
    },
  });

  const menu = [
    {
      platillos: [
        { nombre: "Ensalada César", precio: 8.99 },
        { nombre: "Bruschetta", precio: 6.5 },
      ],
    },
    {
      platillos: [
        { nombre: "Sopa de Tortilla", precio: 5.99 },
        { nombre: "Crema de Champiñones", precio: 4.99 },
      ],
    },
    {
      platillos: [
        { nombre: "Pasta Alfredo", precio: 12.99 },
        { nombre: "Bistec a la Parrilla", precio: 15.99 },
      ],
    },
    {
      platillos: [
        { nombre: "Camarones al Ajillo", precio: 16.99 },
        { nombre: "Filete de Salmón", precio: 18.5 },
      ],
    },
    {
      platillos: [
        { nombre: "Tacos al Pastor", precio: 9.99 },
        { nombre: "Tacos de Barbacoa", precio: 10.5 },
      ],
    },
    {
      platillos: [
        { nombre: "Hamburguesa Clásica", precio: 11.99 },
        { nombre: "Hamburguesa BBQ", precio: 12.99 },
      ],
    },
    {
      platillos: [
        { nombre: "Pizza Margarita", precio: 10.99 },
        { nombre: "Pizza Pepperoni", precio: 11.99 },
      ],
    },
    {
      platillos: [
        { nombre: "Cheesecake", precio: 6.5 },
        { nombre: "Brownie con Helado", precio: 7.0 },
      ],
    },
    {
      platillos: [
        { nombre: "Coca-Cola", precio: 2.5 },
        { nombre: "Jugo Natural", precio: 3.5 },
      ],
    },
    {
      platillos: [
        { nombre: "Café Americano", precio: 2.99 },
        { nombre: "Cappuccino", precio: 3.99 },
      ],
    },
  ];

  return (
    <Flex w="100vw" h="100%">
      <Box w="100%">
        <FaArrowCircleLeft
          className="cursor-pointer"
          size="60"
          title="Regresar a menú anterior"
          onClick={() => setShowAddMenuPage(false)}
        />

        <Box p={4} w="100%" flex="1">
          <Grid
            templateColumns={{
              base: "repeat(2, 1fr)",
              md: "repeat(3, 1fr)",
              lg: "repeat(5, 1fr)",
            }}
            gap={4}
          >
            {categorias.map((categoria, index) => (
              <GridItem key={index}>
                <MenuIconButton
                  label={categoria}
                  image=""
                  onClick={() => alert(`Clic en ${categoria}`)}
                />
              </GridItem>
            ))}
          </Grid>
        </Box>

        {/* Buscador */}
        <Box px={4} pb={4}>
          <Input placeholder="Buscar..." size="md" borderRadius="md" />
        </Box>

        <Box p={4} flex="1">
          <Grid
            templateColumns={{
              base: "repeat(1, 1fr)",
              md: "repeat(2, 1fr)",
              lg: "repeat(4, 1fr)",
            }}
            gap={6}
          >
            {menu.map((categoria, index) =>
              categoria.platillos.map((platillo, idx) => (
                <GridItem
                  key={`${index}-${idx}`}
                  borderWidth="1px"
                  borderRadius="lg"
                  p={4}
                  boxShadow="md"
                  bg="yellow.100"
                >
                  <Flex>
                    <Image
                      rounded="md"
                      src={platillo.imagen || "/image-not-found.png"}
                      alt={platillo.nombre}
                      boxSize="80px"
                      mr={4}
                    />
                    <Box flex="1">
                      <Text fontWeight="bold" fontSize="md">
                        {platillo.nombre}
                      </Text>
                      <Text fontSize="sm" color="gray.600">
                        ${platillo.precio.toFixed(2)}
                      </Text>
                      <Flex mt={2} alignItems="center">
                        <IconButton
                          aria-label="Eliminar"
                          icon={<FaMinus />}
                          size="sm"
                          colorScheme="red"
                          mr={2}
                        />
                        <IconButton
                          aria-label="Agregar"
                          icon={<FaPlus />}
                          size="sm"
                          colorScheme="yellow"
                        />
                      </Flex>
                    </Box>
                  </Flex>
                </GridItem>
              ))
            )}
          </Grid>
        </Box>
      </Box>
    </Flex>
  );
};

export default addMenuPage;
