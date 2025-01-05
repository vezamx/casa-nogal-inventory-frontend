import { Flex, Text } from "@chakra-ui/react";
import { FC } from "react";

interface ErrorMessageProps {
  message?: string;
  errorCode: 404 | 403 | 401 | 500;
}

export const ApiErrorDisplay: FC<ErrorMessageProps> = ({
  message,
  errorCode,
}) => {
  return (
    <Flex h={"100%"} w={"100%"} alignItems={"center"} justify={"center"}>
      <Text fontSize={"xx-large"} fontWeight={"semibold"}>
        {message || "¡Oops! Ha sucedido un error, intentalo de nuevo."}
      </Text>
      <Text fontSize={"large"} fontWeight={"semibold"}>
        Status code: {errorCode}
      </Text>
    </Flex>
  );
};
