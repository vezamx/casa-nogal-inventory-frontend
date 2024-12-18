// "use client";
// import { YellowLine } from "@/app/components/yellowLine/YellowLine";
// import { Box, Flex } from "@chakra-ui/react";
// import { Viewport } from "next";
// import MenuBar from "../components/menuBar/MenuBar";
// import OrderListSection from "../components/sideBars/OrderListSection";
// import { OrderItemsSidebar } from "../components/sideBars/SelectedOrderSidebar";
// import { SelectedOrderProvider } from "../context/SelectedOrderContext";
// import { useApiGetInfo } from "../hooks/useApiCall";
// import { IComanda } from "../types";
// import { OperationsButtons } from "./components/OperationsButtons";
// import { ApiErrorDisplay } from "../components/errors/ErrorMessage";
// import { IndefinteLoadingSpinner } from "../components/loading/LoadingSpinner";
// import { API_HOOKS_QUERY_KEYS } from "@constants";
// import { AddMenuContextProvider } from "../context/AddMenuPageContext";
// import { useContext } from "react";
// import { AddMenuPageContext } from "@/app/context/AddMenuPageContext";
// import AddMenuPage from "@/app/components/sideBars/addMenuPage";

// export const viewport: Viewport = {
//   themeColor: "black",
// };

// const Page = () => {
//   const { data, isLoading, error } = useApiGetInfo<IComanda[]>({
//     url: "/comandas",
//     urlKey: [API_HOOKS_QUERY_KEYS.COMANDAS],
//   });
//   const { showAddMenuPage } = useContext(AddMenuPageContext);

//   return (
//     <Flex w={"100vw"} height="100dvh" width={"100dvw"} margin={0} p={0}>
//       <SelectedOrderProvider>
//         <AddMenuContextProvider>
//           <Box w={"80%"} className="bg-gray-100">
//             <div>
//               <MenuBar menuButton />
//             </div>
//             <div className="w-full flex flex-end">
//               <YellowLine />
//             </div>
//             {isLoading && <IndefinteLoadingSpinner />}
//             {error && <ApiErrorDisplay message={error.message} />}
//             {data && (
//               <Flex as={"main"} w="100%" className="h-5/6" p={8} gap={6}>
//                 <OperationsButtons />
//                 <OrderListSection orderList={data} />
//               </Flex>
//             )}
//           </Box>
//           <OrderItemsSidebar />
//         </AddMenuContextProvider>
//       </SelectedOrderProvider>
//     </Flex>
//   );
// };

// export default Page;
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
import { API_HOOKS_QUERY_KEYS } from "@constants";
import { AddMenuContextProvider, AddMenuPageContext } from "../context/AddMenuPageContext";
import AddMenuPage from "@/app/components/sideBars/addMenuPage";
import { useContext } from "react";

export const viewport: Viewport = {
  themeColor: "black",
};

// Subcomponente que usa el contexto
const PageContent = ({ data }: { data: IComanda[] }) => {
  const { showAddMenuPage } = useContext(AddMenuPageContext);

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
    url: "/comandas",
    urlKey: [API_HOOKS_QUERY_KEYS.COMANDAS],
  });

  return (
    <Flex w={"100vw"} height="100dvh" width={"100dvw"} margin={0} p={0}>
      <SelectedOrderProvider>
        <AddMenuContextProvider>
          {isLoading && <IndefinteLoadingSpinner />}
          {error && <ApiErrorDisplay message={error.message} />}
          {data && <PageContent data={data} />}
          <OrderItemsSidebar />
        </AddMenuContextProvider>
      </SelectedOrderProvider>
    </Flex>
  );
};

export default Page;