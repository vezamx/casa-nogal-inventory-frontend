import { Button, Flex, Heading, Image, Text } from "@chakra-ui/react";
import { FC } from "react";

interface ErrorScreenProps {
  message?: string;
}
export const ForbiddenErrorScreen: FC<ErrorScreenProps> = ({ message }) => {
  return (
    <Flex w={"100%"} h={"100vh"} align={"center"} justify={"center"}>
      <Image
        src="http://localhost:1337/uploads/Error_Image_fa9845e7c1.png"
        alt="Error"
        w={"20rem"}
      />
      <Flex flexDir={"column"} ml={8} gap={10} textAlign={"center"}>
        <Heading>403 - Forbidden</Heading>
        <Text fontWeight={"semibold"} size={"lg"}>
          {message || "Oops! No tienes acceso a ver este contenido"}
        </Text>
        <Button onClick={() => window.location.replace("/")}>
          Volver al inicio
        </Button>
      </Flex>
    </Flex>
  );
};
