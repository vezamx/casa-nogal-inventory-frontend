import React,
  {
    // useRef,
    // useEffect,
    useContext,
  } from 'react';
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalBody,
  ModalCloseButton,
  Button,
  // useDisclosure,
  Text,
  Spinner,
} from '@chakra-ui/react';
import { comandasContext } from '../context/ComandaContexts';

export const PayModal = () => {
  // const { isOpen, onOpen, onClose } = useDisclosure();
  // const inputRef = useRef<HTMLInputElement>(null);
  // let isLoading:boolean = false;
  // let error:any = null;
  // useEffect(() => {
  //   onOpen();
  // }, [isOpen]);
  const { isPayModalOpen, closePayModal } = useContext(comandasContext);
  // const isLoading = false; //cargando
  // const error:string | null = null;//en caso de error

  return (
    <Modal
      isOpen={isPayModalOpen}
      onClose={closePayModal}
      isCentered
      size={"xl"}
    >
      <ModalOverlay />
      <ModalContent bgColor={"brand.gray"}>
      <ModalCloseButton />
        <ModalBody>
          <Text fontSize={"2xl"}>Pagar</Text>
          <Text fontSize={"xl"}>¿Desea pagar la cuenta?</Text>
          <Text fontSize={"xl"}>Total: $100.00</Text>
        </ModalBody>
        
      </ModalContent>
    </Modal>
  )
}
