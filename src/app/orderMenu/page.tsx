"use client";
import AddMenuPage from "@/app/components/sideBars/addMenuPage";
import { YellowLine } from "@/app/components/yellowLine/YellowLine";
import { Box, Flex } from "@chakra-ui/react";
import { API_HOOKS_QUERY_KEYS, COMANDA_STATUS } from "@constants";
import { Viewport } from "next";
import { useContext } from "react";
import { ApiErrorDisplay } from "../components/errors/ApiErrorDisplay";
import { IndefinteLoadingSpinner } from "../components/loading/LoadingSpinner";
import MenuBar from "../components/menuBar/MenuBar";
import OrderListSection from "../components/sideBars/OrderListSection";
import { ProductsSidebar } from "../components/sideBars/ProductsSidebar/ProductsSidebar";
import {
  AddMenuContextProvider,
  AddMenuPageContext,
} from "../context/AddMenuPageContext";
import { SelectedOrderProvider } from "../context/SelectedOrderContext";
import { useApiGetInfo } from "../hooks/useApiCall";
import { IComanda } from "../types";
import { OperationsButtons } from "./components/OperationsButtons";

export const viewport: Viewport = {
  themeColor: "black",
};

const PageContent = ({ data }: { data: IComanda[] }) => {
  const addMenuContext = useContext(AddMenuPageContext);

  if (!addMenuContext) {
    throw new Error("AddMenuPageContext no está disponible.");
  }

  const { showAddMenuPage } = addMenuContext;

  return (
    <Box w={"80%"} className="bg-gray-100">
      <div>
        <MenuBar menuButton />
      </div>
      <div className="w-full flex flex-end">
        <YellowLine />
      </div>
      <Flex as={"main"} w="100%" className="h-5/6" p={8} gap={6}>
        {showAddMenuPage ? (
          <AddMenuPage />
        ) : (
          <>
            <OperationsButtons />
            <OrderListSection orderList={data} />
          </>
        )}
      </Flex>
    </Box>
  );
};

const Page = () => {
  const { data, isLoading, error } = useApiGetInfo<IComanda[]>({
    url: `/comandas?filters[comandaStatus][$eq]=${COMANDA_STATUS.OPEN}`,
    urlKey: [API_HOOKS_QUERY_KEYS.COMANDAS],
  });

  return (
    <Flex w={"100vw"} height="100dvh" width={"100dvw"} margin={0} p={0}>
      <AddMenuContextProvider>
        <SelectedOrderProvider>
          {isLoading && <IndefinteLoadingSpinner />}
          {error && <ApiErrorDisplay errorCode={500} />}
          {data && <PageContent data={data} />}
          <ProductsSidebar />
        </SelectedOrderProvider>
      </AddMenuContextProvider>
    </Flex>
  );
};

export default Page;
