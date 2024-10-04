import {
  Box,
  Divider,
  Flex,
  Grid,
  HStack,
  Text
} from '@chakra-ui/react';
import { FaUser } from "react-icons/fa6";
import React from 'react';

export const boxAtributesEat = {//atributos para alguno Box de consumo
  color:"white",
  mt:"0.4rem",
  w:"100%",
  p: "4px",
};

export const boxAtributesCost = {//atributos para alguno Box de costo
  color:"black",
  bgColor:"white",
  mt:"0.1rem",
  w:"100%",
};

const LeftSide = () => {

  return (
    <HStack
      className='bg-gray-500'
      h="100%"
      w="100%"
      justifyContent="center" // Centrar el contenido horizontalmente
    >
      <Flex
        direction={"column"}
        alignItems="center"
        h="100%"
        w="100%"
      >
        {/* <Box m={2} p={4} bg="white" borderRadius="md">9</Box> */}
        <Box
          m={8}
          p={4}
          bg="white"
          h={"135px"}
          w={"135px"}
          rounded={"full"}
          textAlign={"center"}
          display="flex"
          alignItems="center"
          justifyContent="center" 
        >
          Logotipo
        </Box>
        <Box
          rounded={"5px"}
          bgColor={"white"}
          w={"90%"}
          h={"12%"}
        >
          <Grid
            templateColumns={"repeat(2, 1fr)"}
          >
            <Box
              rounded={"full"}
              className='bg-gray-500'
              mt={"1rem"}
              ml={"1rem"}
              w={"3rem"}
              h={"3rem"}
              textAlign={"center"}
              display="flex"
              alignItems="center"
              justifyContent="center" 
            >
              <FaUser size={30} color="white" />
            </Box>
            <Box
              mt={"1.2rem"}
              ml={"-2rem"}
              display="flex"
              flexDirection={"column"}
              justifyContent={"flex-start"}
            >
              <Text fontSize={"lg"} as="b">Usuario Apellido</Text>
              <Text fontSize={"md"}>0123456789</Text>
            </Box>
          </Grid>
        </Box>
        <Divider
          mt={5}
          borderWidth="1px"
          //bgColor={"gray.100"}
          //borderColor="gray.100"
          borderColor="white"//no la deja en color blanco
        />
        <Box
          {...boxAtributesEat}
        >
          <Flex
            direction={"row"}
            justifyContent={"space-between"}
          >
            <Box><Text as="b" pl={1}>1</Text></Box>
            <Box><Text as="b" >Consumo</Text></Box>
            <Box><Text as="b" pr={1}>$16.00</Text></Box>
          </Flex>
        </Box>
        <Divider
          mt={5}
          borderWidth="1px"
          borderColor="white"
        />
        <Box
          {...boxAtributesEat}
        >
        <Flex
            direction={"row"}
            justifyContent={"space-between"}
          >
            <Box><Text as="b" pl={1}>2</Text></Box>
            <Box><Text as="b" >Consumo</Text></Box>
            <Box><Text as="b" pr={1}>$12.00</Text></Box>
          </Flex>
        </Box>
        <Divider
          mt={5}
          borderWidth="1px"
          borderColor="white"
        />
        <Box
          {...boxAtributesEat}
        >
        <Flex
            direction={"row"}
            justifyContent={"space-between"}
          >
            <Box><Text as="b" pl={1}>3</Text></Box>
            <Box><Text as="b" >Consumo</Text></Box>
            <Box><Text as="b" pr={1}>$20.00</Text></Box>
          </Flex>
        </Box>
        <Divider
          mt={5}
          borderWidth="1px"
          borderColor="white"
        />
        <Box
          {...boxAtributesEat}
          mb={20}
        >
        <Flex
            direction={"row"}
            justifyContent={"space-between"}
          >
            <Box><Text as="b" pl={1}>1</Text></Box>
            <Box><Text as="b" >Consumo</Text></Box>
            <Box><Text as="b" pr={1}>$6.00</Text></Box>
          </Flex>
        </Box>
        
        <Divider
          mt={5}
          borderWidth="1px"
          borderColor="white"
        />

        <Box
          {...boxAtributesCost}
        >
          <Flex
            direction={"row"}
            justifyContent={"space-between"}
          >
            <Box><Text pl={1} p={"2px"} ml={"3px"}>Subtotal</Text></Box>
            <Box><Text pr={1} p={"2px"} mr={"3px"}>$34.00</Text></Box>
          </Flex>
        </Box>
        <Box
          {...boxAtributesCost}
        >
          <Flex
            direction={"row"}
            justifyContent={"space-between"}
          >
            <Box><Text pl={1} p={"2px"} ml={"3px"}>IVA</Text></Box>
            <Box><Text pr={1} p={"2px"} mr={"3px"}>16%</Text></Box>
          </Flex>
        </Box>
        <Box
          {...boxAtributesCost}
        >
          <Flex
            direction={"row"}
            justifyContent={"space-between"}
          >
            <Box><Text pl={1} p={"1px"} ml={"3px"} as="b">Total</Text></Box>
            <Box><Text pr={1} p={"1px"} mr={"3px"} as="b">$50.00</Text></Box>
          </Flex>
        </Box>
        <Box
          {...boxAtributesCost}
        >
          <Flex
            direction={"row"}
            justifyContent={"space-between"}
            fontWeight="bold"
          >
            <Box><Text pl={1} p={"1px"} ml={"3px"}>Pago</Text></Box>
            <Box><Text pr={1} p={"1px"} mr={"3px"}>$50.00</Text></Box>
          </Flex>
        </Box>
      </Flex>
    </HStack>
  );
}

export default LeftSide;