import { Box, Flex, Image, Text, VStack, IconButton, HStack } from "@chakra-ui/react";
import { CloseIcon } from "@chakra-ui/icons";
import Logo from "../../components/logo/Logo";

export const SidebarLeft = () => {
  return (
    <Flex
      as="aside"
      direction="column"
      h="100vh"
      w="30%"
      bg="brand.yellow.primary"
      p={4}
      align="center"
      boxShadow="lg"
      overflowY="auto" // Permite scroll si el contenido excede la altura
    >
      {/* Logo */}
      <Logo width={150} height={150} mb={4} />

      {/* Contenedor de Comandas */}
      <VStack
        w="100%"
        bg="brand.yellow.light"
        p={4}
        borderRadius="lg"
        boxShadow="md"
        spacing={4}
        align="flex-start"
      >
        <Text fontSize="lg" fontWeight="bold" textAlign="center" w="100%">
          Ejemplo de Estructura de Comandas en la orden
        </Text>

        {/* Tarjetas de ejemplo */}
        {[1, 2, 3, 4].map((item) => (
          <Flex
            key={item}
            w="100%"
            bg="white"
            p={3}
            borderRadius="md"
            boxShadow="sm"
            alignItems="center"
            justifyContent="space-between"
            mb={3} // Margen inferior para separar las tarjetas
          >
            {/* Imagen del platillo */}
            <Box
              boxSize="50px"
              borderRadius="md"
              overflow="hidden"
              mr={3}
              bgColor={"wheat"}
            >
              <Image
                src="/ruta-platillo.jpg"
                alt="Foto Platillo"
                boxSize="100%"
                objectFit="cover"
              />
            </Box>

            {/* Contenedor de detalles, ocupa todo el espacio disponible a la derecha de la imagen */}
            <Flex direction="column" flex="1" spacing={3}>
              {/* Nombre del platillo, ocupa 100% del ancho */}
              <Box
                w="100%" // Ocupa todo el ancho disponible
                h="25px" // Altura ajustada para darle más prominencia
                bg="brand.yellow.primary"
                borderRadius="md"
                mb={1} // Margen inferior para separar de los demás detalles
                display="flex"
                alignItems="center"
                justifyContent="center" // Centrar el texto vertical y horizontalmente
                color="white" // Cambiar color del texto para mejor contraste
                fontWeight="bold"
              >
                
              </Box>

              {/* Detalles adicionales y botón de eliminación en la misma fila */}
              <Flex alignItems="center" justifyContent="space-between">
                <Box
                  w="50px" // Mismo tamaño que el cuadro rojo
                  h="30px" // Mismo tamaño que el cuadro rojo
                  bg="brand.yellow.primary"
                  borderRadius="md"
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                  fontWeight="bold"
                  color="white"
                >
                  
                </Box>
                
                <IconButton
                  icon={<CloseIcon />}
                  colorScheme="red"
                  size="sm"
                  aria-label="Eliminar platillo"
                  w="50px" // Ajuste del ancho para coincidir con el cuadro
                  h="30px" // Ajuste de la altura para coincidir con el cuadro
                  ml={3}
                />
              </Flex>
            </Flex>
          </Flex>
        ))}
      </VStack>
    </Flex>
  );
};

export default SidebarLeft;