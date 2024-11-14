"use client";
import { Flex, Heading, Divider, IconButton } from "@chakra-ui/react";
import { usePathname, useRouter } from "next/navigation";
import { useMemo } from "react";
import { FaChevronLeft } from "react-icons/fa";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const pathName = usePathname();
  const router = useRouter();

  const isDetailsProduct = useMemo(
    () => pathName.split("/").length > 3,
    [pathName],
  );
  return (
    <Flex w={"100%"} h={"100%"} px={10} py={7} flexDir={"column"}>
      <Flex gap={4}>
        {isDetailsProduct && (
          <IconButton
            icon={<FaChevronLeft />}
            aria-label="Back to product list"
            onClick={() => router.replace("/inventarios/productos")}
            bgColor={"brand.background"}
          ></IconButton>
        )}
        <Heading color="brand.gray" fontWeight={"light"}>
          Listado de productos
        </Heading>
      </Flex>
      <Divider
        color={"brand.gray"}
        bgColor={"brand.gray"}
        borderColor={"brand.gray"}
      />
      {children}
    </Flex>
  );
};

export default Layout;
