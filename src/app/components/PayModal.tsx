import React, { useContext } from 'react';
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  Button,
  Text,
} from '@chakra-ui/react';
import { comandasContext } from '../context/ComandaContexts';

interface PayModalProps {
  mode: 'pay' | 'split';
}

export const PayModal: React.FC<PayModalProps> = ({ mode }) => {
  const { isPayModalOpen, closePayModal } = useContext(comandasContext);

  return (
    <Modal isOpen={isPayModalOpen} onClose={closePayModal} isCentered size="xl">
      <ModalOverlay />
      <ModalContent bgColor="brand.gray">
        <ModalCloseButton />
        <ModalHeader>
          {mode === 'pay' ? 'Pagar Comanda' : 'Dividir Cuenta'}
        </ModalHeader>
        <ModalBody>
          {mode === 'pay' ? (
            <>
              <Text fontSize="2xl">¿Desea pagar la cuenta?</Text>
              <Button colorScheme="green" mt={4} onClick={closePayModal}>
                Confirmar Pago
              </Button>
            </>
          ) : (
            <>
              <Text fontSize="2xl">¿Desea dividir la cuenta?</Text>
              <Button colorScheme="blue" mt={4} onClick={closePayModal}>
                Confirmar División
              </Button>
            </>
          )}
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};