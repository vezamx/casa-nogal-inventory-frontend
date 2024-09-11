import React,
  {
    useRef,
    useEffect,
  } from 'react';
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalBody,
  ModalCloseButton,
  Button,
  useDisclosure,
  Text,
  Spinner,
} from '@chakra-ui/react';

export const PayModal = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const inputRef = useRef<HTMLInputElement>(null);
  let isLoading:boolean = false;
  let error:any = null;

  useEffect(() => {
    onOpen();
  }, [isOpen]);

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      isCentered
      size={"xl"}
    >
      <ModalOverlay />
      <ModalContent bgColor={"brand.gray"}>
      <ModalCloseButton />
        <>
        {
          isLoading && (
            <ModalBody
              h={"100%"}
              w={"100%"}
              display={"flex"}
              flexDir={"column"}
              justifyItems={"center"}
              alignItems={"center"}
            >
              <Spinner size="xl" />
              <Text
                mt={5}
                fontSize={"2xl"}
                color={"brand.background"}
                fontWeight={"bold"}
              >
                Procesando pago ...
              </Text>
            </ModalBody>
        )}
        ({
          error && (
            <ModalBody
              h={"100%"}
              w={"100%"}
              display={"flex"}
              flexDir={"column"}
              justifyItems={"center"}
              alignItems={"center"}
            >
              <Text
                mt={5}
                fontSize={"2xl"}
                color={"brand.background"}
                fontWeight={"bold"}
              >
                Error al procesar el pago
              </Text>
              <Text
                mt={5}
                fontSize={"2xl"}
                color={"brand.background"}
                fontWeight={"bold"}
              >
                {error}
              </Text>
              <Button colorScheme="red" onClick={onClose}>
                Cerrar
              </Button>
            </ModalBody>
          )
        })
        </>
        PayModal
      </ModalContent>
    </Modal>
  )
}
