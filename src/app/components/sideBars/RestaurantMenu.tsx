import { Box, Text, VStack, Button, Flex } from "@chakra-ui/react";
import React, { FC, useState } from "react";

export const menu = {//El menú será tomado de la base de datos, este areglo es ejemplo
  restaurante: "Menú Casa Nogal",
  menu: [
    {
      categoria: "Entradas",
      platillos: [
        {
          nombre: "Ensalada César",
          descripcion:
            "Lechuga romana, crutones, queso parmesano y aderezo César clásico.",
          precio: 8.99,
          alergenos: ["gluten", "lactosa"],
        },
        {
          nombre: "Alitas de pollo BBQ",
          descripcion: "Alitas de pollo crujientes con salsa BBQ casera.",
          precio: 9.99,
          alergenos: ["gluten"],
        },
      ],
    },
    {
      categoria: "Principales",
      platillos: [
        {
          nombre: "Bistec a la parrilla",
          descripcion:
            "Bistec de res a la parrilla con papas fritas y verduras a la parrilla.",
          precio: 15.99,
          alergenos: [],
        },
        {
          nombre: "Pasta Alfredo",
          descripcion: "Pasta fettuccine con salsa Alfredo cremosa y pollo.",
          precio: 12.99,
          alergenos: ["gluten", "lactosa"],
        },
        {
          nombre: "Tacos al pastor",
          descripcion:
            "Tres tacos de carne al pastor con piña, cebolla y cilantro.",
          precio: 10.99,
          alergenos: ["gluten"],
        },
      ],
    },
    {
      categoria: "Postres",
      platillos: [
        {
          nombre: "Flan casero",
          descripcion: "Clásico flan casero con caramelo.",
          precio: 4.99,
          alergenos: ["lactosa"],
        },
        {
          nombre: "Cheesecake de frutos rojos",
          descripcion:
            "Cheesecake suave con base de galleta y coulis de frutos rojos.",
          precio: 5.99,
          alergenos: ["gluten", "lactosa"],
        },
      ],
    },
    {
      categoria: "Bebidas",
      platillos: [
        {
          nombre: "Coca-Cola",
          precio: 2.5,
        },
        {
          nombre: "Jugo de naranja natural",
          precio: 3.0,
        },
        {
          nombre: "Agua mineral",
          precio: 1.5,
        },
      ],
    },
  ],
};

const RestaurantMenu: FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string | null>("");

  const handleCategoryClick = (category: string) => {
    setSelectedCategory((prev) => (prev === category ? null : category));
  };

  return (
    <Flex direction="column" h="100vh" w="35vw" bg="gray.50">
      
      <Box bg="white" p={4} borderBottom="1px solid" borderColor="gray.200">
        <Text fontSize="2xl" fontWeight="bold" textAlign="center">
          {menu.restaurante}
        </Text>
      </Box>

      <Flex
        bg="white"
        p={4}
        borderBottom="1px solid"
        borderColor="gray.200"
        justify="center"
        gap={4}
        wrap="wrap" 
      >
        {menu.menu.map((category) => (
          <Button
            key={category.categoria}
            onClick={() => handleCategoryClick(category.categoria)}
            variant={selectedCategory === category.categoria ? "solid" : "outline"}
            colorScheme="orange"
          >
            {category.categoria}
          </Button>
        ))}
      </Flex>

      <Box flex="1" p={4} overflowY="auto">
        {selectedCategory ? (
          menu.menu
            .filter((category) => category.categoria === selectedCategory)
            .map((category) => (
              <Box key={category.categoria}>
                <Text fontSize="xl" fontWeight="bold" mb={4}>
                  {category.categoria}
                </Text>
                <VStack spacing={4} align="stretch">
                  {category.platillos.map((platillo) => (
                    <Box
                      key={platillo.nombre}
                      border="1px solid"
                      borderColor="gray.300"
                      borderRadius="md"
                      p={4}
                      bg="white"
                    >
                      <Text fontSize="lg" fontWeight="bold">
                        {platillo.nombre}
                      </Text>
                      <Text fontSize="md" fontWeight="medium" mt={2}>
                        Precio: ${platillo.precio.toFixed(2)}
                      </Text>
                    </Box>
                  ))}
                </VStack>
              </Box>
            ))
        ) : (
          <Text fontSize="lg" color="gray.500" textAlign="center">
            Seleccionar una categoría para ver los platillos.
          </Text>
        )}
      </Box>
    </Flex>
  );
};

export default RestaurantMenu;