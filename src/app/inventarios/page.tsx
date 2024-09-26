import { Divider, Flex, Heading } from "@chakra-ui/react";
import { FC } from "react";

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
      <Flex w={"100%"} h={"100%"}>
        {/* Here goes the table */}
        Aqui va a ir la custom table
      </Flex>
    </Flex>
  );
};

export default page;
