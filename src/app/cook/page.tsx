"use client";
import { YellowLine } from "@/app/components/yellowLine/YellowLine";
import { Box, Flex } from "@chakra-ui/react";
import { Viewport } from "next";
import { useState } from "react";
import MenuBar from "../components/menuBar/MenuBar";
import OperationsSection from "../components/sideBars/cook/OperationsSection";
import OrderListSection from "../components/sideBars/cook/OrderListSection";
import SelectedOrderSection from "../components/sideBars/cook/SelectedOrderSection";
import { SidebarLeft } from "../components/sideBars/cook/SidebarLeft";

export const viewport: Viewport = {
  themeColor: "black",
};

const Page = () => {
  const [selectedOrder, setSelectedOrder] = useState<string>("");

  return (
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
  );
};

export default Page;
