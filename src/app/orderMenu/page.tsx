"use client";
import { YellowLine } from "@/app/components/yellowLine/YellowLine";
import MenuBar from "../components/menuBar/MenuBar";
import { SidebarLeft } from "../components/sideBars/SidebarLeft";
import { Viewport } from "next";
import { Box, Flex, Button } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import SelectedOrderSection from "../components/sideBars/SelectedOrderSection";
import OperationsSection from "../components/sideBars/OperationsSection";
import OrderListSection from "../components/sideBars/OrderListSection";
import { comandasContext } from "../context/ComandaContexts";

export const viewport: Viewport = {
  themeColor: "black",
};

const Page = () => {
  const [selectedOrder, setSelectedOrder] = useState<string>("");
  const [comandaContext, setComandaContext] = useState<any>(null);

  useEffect(() =>{
    setComandaContext({
      id:selectedOrder,
      comanda:{id:selectedOrder, status:"abierta"},
    });
  }, [selectedOrder]);

  return (
    <comandasContext.Provider value={{ comandaContext, setComandaContext }}>
      <Flex w={"100vw"} height="100dvh" width={"100dvw"} margin={0} p={0}>
        <Box w={"80%"} className="bg-gray-100">
          <div>
            <MenuBar menuButton />
          </div>
          <div className="w-full flex flex-end">
            <YellowLine />
          </div>
          <Flex as={"main"} w="100%" className="h-5/6" p={8} gap={6}>
            {!!selectedOrder ? <SelectedOrderSection /> : <OperationsSection />}
            <OrderListSection
              setSelectedOrder={setSelectedOrder}
              selectedOrder={selectedOrder}
            />
          </Flex>
        </Box>
        <SidebarLeft />
      </Flex>
    </comandasContext.Provider>
  );
};

export default Page;
