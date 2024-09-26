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
  const { isPayModalOpen, closePayModal } = useContext(comandasContext);

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
