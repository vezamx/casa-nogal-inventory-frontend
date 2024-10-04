"use strict"
import { Box, Flex, Image, Text, VStack, IconButton, HStack } from "@chakra-ui/react";
import { CloseIcon } from "@chakra-ui/icons";
import Logo from "../../components/logo/Logo";
import { useContext, useEffect, useState } from "react";
import { useRouter } from "next/router";
import { comandasContext } from "@/app/context/ComandaContexts";

export const SidebarLeft = () => {
  const [hashValue, setHashValue] = useState('');
  //const router = useRouter();

  // useEffect(() => {
  //   if (typeof window !== 'undefined') {
  //     setHashValue(window.location.hash); // Obtén el hash de la URL
  //   }
  // }, [router.asPath]); // Se actualiza cada vez que cambia la ruta
  
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
      overflowY="auto"
    >
      <Logo width={150} height={150} mb={4} />

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
            mb={3}
          >
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

            <Flex direction="column" flex="1" spacing={3}>
              <Box
                w="100%"
                h="25px"
                bg="brand.yellow.primary"
                borderRadius="md"
                mb={1}
                display="flex"
                alignItems="center"
                justifyContent="center"
                color="white"
                fontWeight="bold"
              >
                
              </Box>

              <Flex alignItems="center" justifyContent="space-between">
                <Box
                  w="50px"
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
                {

                }
                <IconButton
                  icon={<CloseIcon />}
                  colorScheme="red"
                  size="sm"
                  aria-label="Eliminar platillo"
                  w="50px"
                  h="30px"
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
