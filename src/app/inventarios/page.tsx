import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Divider,
  Flex,
  FormControl,
  FormLabel,
  Grid,
  GridItem,
  Heading,
  Input,
  Text,
} from "@chakra-ui/react";
import { FC, ReactNode } from "react";

const page: FC = () => {
  return (
    <Flex w={"100%"} h={"100%"} px={10} py={7} flexDir={"column"}>
      <Heading color="brand.gray" fontWeight={"light"}>
        Inventario
      </Heading>
      <Divider
        color={"brand.gray"}
        bgColor={"brand.gray"}
        borderColor={"brand.gray"}
      />

      <CollapsibleTable>
        <CollapsibleTableItem />
      </CollapsibleTable>
    </Flex>
  );
};

const CollapsibleTable: FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <Flex w={"100%"} h={"100%"} px={10} py={5} flexDir={"column"}>
      <Grid
        templateColumns="repeat(4, 1fr)"
        gap={6}
        mt={2}
        width={"100%"}
        textAlign={"center"}
        id="TableHeader"
      >
        <GridItem w="100%">
          <Text>Número</Text>
        </GridItem>
        <GridItem w="100%">
          <Text>Nombre</Text>
        </GridItem>
        <GridItem w="100%">
          <Text>Stock</Text>
        </GridItem>
        <GridItem w="100%">
          <Text></Text>
        </GridItem>
      </Grid>
      <Accordion allowToggle width={"100%"}>
        {children}
      </Accordion>
    </Flex>
  );
};

const CollapsibleTableItem: FC = () => {
  return (
    <AccordionItem border={"1px solid "} borderColor={"brand.gray"}>
      <AccordionButton>
        <Grid templateColumns="repeat(4, 1fr)" gap={6} mt={2} width={"100%"}>
          <GridItem w="100%">
            <Text>1</Text>
          </GridItem>
          <GridItem w="100%">
            <Text>Producto 1</Text>
          </GridItem>
          <GridItem w="100%">
            <Text>10</Text>
          </GridItem>
          <GridItem w="100%"></GridItem>
        </Grid>

        <AccordionIcon />
      </AccordionButton>
      <AccordionPanel pb={4} bgColor={"brand.background"}>
        <Grid
          width={"100%"}
          bgColor="brand.gray"
          templateColumns={"repeat(2, 1fr)"}
        >
          <GridItem as={Flex} flexDir="column" px={10} gap={3} py={6}>
            <Heading color={"white"}>Registrar entrada</Heading>
            <FormControl width={"30%"} color={"white"}>
              <FormLabel>Cantidad</FormLabel>
              <Input type="number" bgColor={"white"} color={"brand.gray"} />
            </FormControl>
          </GridItem>
          <GridItem as={Flex} flexDir="column" px={10} gap={3} py={6}>
            <Heading color={"white"}>Registrar salida</Heading>
            <FormControl width={"30%"} color={"white"}>
              <FormLabel>Cantidad</FormLabel>
              <Input type="number" bgColor={"white"} color={"brand.gray"} />
            </FormControl>
          </GridItem>
        </Grid>
      </AccordionPanel>
    </AccordionItem>
  );
};

export default page;
