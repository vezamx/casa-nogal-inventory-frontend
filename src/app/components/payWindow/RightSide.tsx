import { Box, Center, Flex, Grid, Text } from '@chakra-ui/react';
import React from 'react';

const RightSide = () => {
  return (
    <Box
      className='bg-gray-100'
      h="100%" 
      w="100%"
    >
      <Flex
        justify={"center"}
        align={"center"}
        h={"100%"}
      >
        <Grid
          templateColumns={"1fr"}
          w="80%"
          gap={4}
        >
          <Box
                w={"100%"}
                h={"100px"}
                bg={"white"}
                display={"flex"}
                justifyContent={"center"}
                alignItems={"center"}
              >
            <Center>
              <Text fontSize={"6xl"} as="b">$54.00</Text>
            </Center>
          </Box>

          <Box>
            <Grid
              templateColumns={"repeat(3, 1fr)"}
              gap={2}
            >
              <Box
                w={"100%"}
                h={"100px"}
                bg={"white"}
                display={"flex"}
                justifyContent={"center"}
                alignItems={"center"}
              >
                <Center>
                  <Text>Efectivo</Text>
                </Center>
                </Box>
              <Box
                w={"100%"}
                h={"100px"}
                bg={"white"}
                display={"flex"}
                justifyContent={"center"}
                alignItems={"center"}
              >
                <Center>
                  <Text>Tarjeta de debito/crédito</Text>
                </Center>
              </Box>
              <Box
                w={"100%"}
                h={"100px"}
                bg={"white"}
                display={"flex"}
                justifyContent={"center"}
                alignItems={"center"}
              >
                <Center>
                  <Text>Vales/tarjeta de regalo</Text>
                </Center>
              </Box>
            </Grid>
          </Box>

          <Box>
            <Grid
              templateColumns={"repeat(2, 1fr)"}
              gap={2}
            >
              <Box
                w={"100%"}
                h={"100px"}
                bg={"white"}
                display={"flex"}
                justifyContent={"center"}
                alignItems={"center"}
              >
                <Text>Dividir</Text>
              </Box>
              <Box
                w={"100%"}
                h={"100px"}
                bg={"white"}
                display={"flex"}
                justifyContent={"center"}
                alignItems={"center"}
              >
                <Text>Juntar</Text>
              </Box>
            </Grid>
          </Box>
        </Grid>
      </Flex>
    </Box>
  );
}

export default RightSide;