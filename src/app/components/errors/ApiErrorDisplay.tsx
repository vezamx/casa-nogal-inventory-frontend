import { Flex, Text } from "@chakra-ui/react";
import { FC } from "react";

interface ErrorMessageProps {
  message: string;
}

export const ApiErrorDisplay: FC<ErrorMessageProps> = ({ message }) => {
  console.error(message);
  return (
    <Flex h={"100%"} w={"100%"} alignItems={"center"} justify={"center"}>
      <Text fontSize={"xx-large"} fontWeight={"semibold"}>
        {message || "¡Oops! Ha sucedido un error, intentalo de nuevo."}
      </Text>
    </Flex>
  );
};
