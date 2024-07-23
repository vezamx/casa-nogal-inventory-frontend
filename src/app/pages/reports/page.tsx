"use client";
import MenuButton from "@/app/components/menuButton/MenuButton";
import { YellowLine } from "@/app/components/yellowLine/YellowLine";
import {
  Box,
  Button,
  Center,
  Flex,
  Input,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Text,
} from "@chakra-ui/react";
import { useState } from "react";

import { AnotherReport } from "@/app/components/reports/another/AnotherReport";
import { Financial } from "@/app/components/reports/financial/Financial";
import { Inventory } from "@/app/components/reports/inventory/Inventory";
import { Kitchen } from "@/app/components/reports/kitchen/Kitchen";
import { OpenTables } from "@/app/components/reports/openTables/OpenTables";
import { RRHH } from "@/app/components/reports/rrhh/RRHH";

const Reports = () => {
  const [addNewproduct, setAddNewProduct] = useState(false);
  const [showStock, setShowStock] = useState(false);

  const showFormProduct = (addNewproduct: boolean) => {
    console.log(addNewproduct);
    setAddNewProduct(!addNewproduct);
    setShowStock(false);
  };

  const showFormStock = (showStock: boolean) => {
    console.log(showStock);
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
      <Box>
        <Center>
          <Text fontSize="6xl" mt={6} as="b">
            Reportes
          </Text>
        </Center>
        <Center>
          <Box mt={2} ml={6} mb={2}>
            <Text fontSize="2xl" as="b">
              Seleccionar un rango de fechas para ver los reportes.
            </Text>
            <Flex width='100%' justifyContent='center'>
              <Box mr={2}>
                <Input type="datetime-local" size="md" name="date1" />
              </Box>
              <Box ml={2}>
                <Input type="datetime-local" size="md" name="date2"/>
              </Box>
              <Button ml={4} colorScheme='yellow' >Buscar</Button>
            </Flex>
          </Box>
        </Center>
        <Tabs size="lg" variant="enclosed" isFitted>
          <TabList>
            <Tab>Cocina</Tab>
            <Tab>Cafetería</Tab>
            <Tab>Mesas</Tab>
            <Tab>Inventario</Tab>
            <Tab>RRHH</Tab>
            <Tab>Financiero</Tab>
            <Tab>Otro</Tab>
          </TabList>
          <TabPanels>
            <TabPanel>
              <Kitchen zone="kitchen" />
            </TabPanel>
            <TabPanel>
              <Kitchen />
            </TabPanel>
            <TabPanel>
              <OpenTables />
            </TabPanel>
            <TabPanel>
              <Inventory />
            </TabPanel>
            <TabPanel>
              <RRHH />
            </TabPanel>
            <TabPanel>
              <Financial />
            </TabPanel>
            <TabPanel>
              <AnotherReport />
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Box>
    </Box>
  );
};

export default Reports;
