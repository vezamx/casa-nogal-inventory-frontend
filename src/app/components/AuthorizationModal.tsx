import React from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalBody,
  Text,
  Button,
  Input,
  Spinner,
} from "@chakra-ui/react";
import { useAuthorization } from "../hooks/useAuthorization";
import Image from "next/image";

interface AuthorizationModalProps {}
const AuthorizationModal: React.FC<AuthorizationModalProps> = () => {
  const { isOpen, onClose, token, setToken, isLoading, error, data, exec } =
    useAuthorization();
  const inputRef = React.useRef<HTMLInputElement>(null);

  React.useEffect(() => {
    if (isOpen) {
      inputRef.current?.focus();
      setToken("");
    }
  }, [isOpen]);

  return (
    <Modal isOpen={isOpen} onClose={onClose} isCentered size={"xl"}>
      <ModalOverlay />
      <ModalContent bgColor={"brand.gray"}>
        <React.Fragment>
          {isLoading && (
            <ModalBody
              h={"100%"}
              w={"100%"}
              display={"flex"}
              flexDir={"column"}
              justifyItems={"center"}
              alignItems={"center"}
              py={10}
            >
              <Spinner size="xl" />
              <Text
                mt={5}
                fontSize={"2xl"}
                color={"brand.background"}
                fontWeight={"bold"}
              >
                Autorizando ...
              </Text>
            </ModalBody>
          )}
          {error && (
            <ModalBody
              h={"100%"}
              w={"100%"}
              display={"flex"}
              flexDir={"column"}
              justifyItems={"center"}
              alignItems={"center"}
              py={10}
            >
              <Text
                mt={5}
                fontSize={"2xl"}
                color={"brand.background"}
                fontWeight={"bold"}
              >
                Error: {error.message}
              </Text>
              <Button colorScheme="red" onClick={onClose}>
                Cerrar
              </Button>
            </ModalBody>
          )}
          {!isLoading && !error && !data && (
            <ModalBody
              h={"100%"}
              w={"100%"}
              display={"flex"}
              flexDir={"column"}
              justifyItems={"center"}
              alignItems={"center"}
              py={10}
            >
              <Image
                src={"/tarjetaAuth.png"}
                alt="Tarjeta Identificacion"
                width={200}
                height={200}
              />
              <Input
                aria-label="Token de Identificacion"
                value={token}
                opacity={0}
                height={1}
                width={1}
                ref={inputRef}
                onChange={(e) => {
                  setToken(e.target.value);
                }}
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    console.log("Autorizando con token ...");
                    console.log(token);
                    exec();
                  }
                }}
              />
              <Text
                mt={10}
                mb={5}
                fontSize={"2xl"}
                color={"brand.background"}
                fontWeight={"bold"}
              >
                APROXIME LA IDENTIFICACIÓN
              </Text>
              <Button colorScheme="red" onClick={onClose}>
                Cancelar
              </Button>
            </ModalBody>
          )}
        </React.Fragment>
      </ModalContent>
    </Modal>
  );
};

export default AuthorizationModal;
