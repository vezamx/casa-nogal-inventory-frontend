"use client";
import { YellowLine } from "@/app/components/yellowLine/YellowLine";
import MenuBar from "../components/menuBar/MenuBar";
import { SidebarLeft } from "../components/menuWindowComponents/SidebarLeft";
import { Viewport } from "next";
import { Box, Flex, Button } from "@chakra-ui/react";
import { useEffect, useState, useContext } from "react";
import SelectedOrderSection from "../components/menuWindowComponents/SelectedOrderSection";
import OperationsSection from "../components/menuWindowComponents/OperationsSection";
import OrderListSection from "../components/menuWindowComponents/OrderListSection";
import {
  comandasContext,
  ComandaContextProvider,
} from "../context/ComandaContexts";
import { PayModal } from "../components/PayModal";

export const viewport: Viewport = {
  themeColor: "black",
};

const Page = () => {
  const [selectedOrder, setSelectedOrder] = useState<string>("");

  return (
    <ComandaContextProvider>
      <Flex w={"100vw"} height="100dvh" width={"100dvw"} margin={0} p={0}>
        <Box w={"100%"} className="bg-gray-100">
          <div>
            <MenuBar menuButton />
          </div>
          <div className="w-full flex flex-end">
            <YellowLine />
          </div>
          <Flex
            as={"main"}
            w="100%"
            className="h-5/6"
            p={8}
            // gap={6}
            flexDir={"column-reverse"}
          >
            <SelectedOrderSection />
            <OrderListSection
              setSelectedOrder={setSelectedOrder}
              selectedOrder={selectedOrder}
            />
          </Flex>
        </Box>
        <SidebarLeft />
      </Flex>
      <PayModal />
    </ComandaContextProvider>
  );
};

export default Page;
