import { Flex, Spinner } from "@chakra-ui/react";
import { FC } from "react";

export const IndefinteLoadingSpinner: FC = () => {
  return (
    <Flex w={"100%"} h={"100%"} justify={"center"} alignItems={"center"}>
      <Spinner
        thickness="4px"
        speed="0.65s"
        emptyColor="gray.200"
        color="blue.500"
        size="xl"
      />
    </Flex>
  );
};
