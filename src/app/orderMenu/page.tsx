"use client";
import { YellowLine } from "@/app/components/yellowLine/YellowLine";
import { Box, Flex } from "@chakra-ui/react";
import { Viewport } from "next";
import MenuBar from "../components/menuBar/MenuBar";
import OrderListSection from "../components/sideBars/OrderListSection";
import { OrderItemsSidebar } from "../components/sideBars/SelectedOrderSidebar";
import { SelectedOrderProvider } from "../context/SelectedOrderContext";
import { useApiGetInfo } from "../hooks/useApiCall";
import { IComanda } from "../types";
import { OperationsButtons } from "./components/OperationsButtons";
import { ApiErrorDisplay } from "../components/errors/ErrorMessage";
import { IndefinteLoadingSpinner } from "../components/loading/LoadingSpinner";

export const viewport: Viewport = {
  themeColor: "black",
};

const Page = () => {
  const { data, isLoading, error } = useApiGetInfo<IComanda[]>({
    url: "/comandas",
    urlKey: ["comandas"],
  });

  return (
    <Flex w={"100vw"} height="100dvh" width={"100dvw"} margin={0} p={0}>
      <SelectedOrderProvider>
        <Box w={"80%"} className="bg-gray-100">
          <div>
            <MenuBar menuButton />
          </div>
          <div className="w-full flex flex-end">
            <YellowLine />
          </div>
          {isLoading && <IndefinteLoadingSpinner />}
          {error && <ApiErrorDisplay message={error.message} />}
          {data && (
            <Flex as={"main"} w="100%" className="h-5/6" p={8} gap={6}>
              <OperationsButtons />
              <OrderListSection orderList={data} />
            </Flex>
          )}
        </Box>
        <OrderItemsSidebar />
      </SelectedOrderProvider>
    </Flex>
  );
};

export default Page;
