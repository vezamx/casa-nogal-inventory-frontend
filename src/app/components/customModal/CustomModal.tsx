import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalCloseButton,
    ModalBody,
    ModalFooter,
    Button,
} from '@chakra-ui/react';
import React, { FC } from 'react';

interface CustomModalProps {
    isOpen: boolean;
    onClose: () => void;
    children: React.ReactNode;
}

const CustomModal: FC<CustomModalProps> = ({ isOpen, onClose, children }) => {
    return (
        <Modal isOpen={isOpen} onClose={onClose}>
            <ModalOverlay />
            <ModalContent>
                <ModalHeader>Órdenes</ModalHeader>
                <ModalCloseButton />
                <ModalBody>{children}</ModalBody>

                <ModalFooter>
                    <Button colorScheme="blue" mr={3} onClick={onClose}>
                        Cerrar
                    </Button>
                </ModalFooter>
            </ModalContent>
        </Modal>
    );
};

export default CustomModal;
