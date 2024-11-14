import {
  Button,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Text,
} from "@chakra-ui/react";
import { useContext } from "react";
import { SelectOperationItemContext } from "../context/SelectedOperationItemContext";

interface ConfirmModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ConfirmModal: React.FC<ConfirmModalProps> = ({
  isOpen,
  onClose,
}) => {
  const { selectedInsumo } = useContext(SelectOperationItemContext);
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Confirmar Accion</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Text fontWeight={"bold"} mb={3}>
            Estas por eliminar: {selectedInsumo?.nombre}
          </Text>
          Esta accion no se puede deshacer, ¿Estas seguro que deseas continuar?
        </ModalBody>

        <ModalFooter>
          <Button colorScheme="gray" mr={3} onClick={onClose}>
            Cancelar
          </Button>
          <Button colorScheme="yellow">Confirmar</Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};
