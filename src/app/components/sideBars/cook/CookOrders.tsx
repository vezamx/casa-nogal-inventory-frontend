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
  useDisclosure
} from '@chakra-ui/react';
import {
  useEffect,
  useRef
} from 'react';

const CookOrders = () => {
  const inputRef = useRef<HTMLInputElement>(null);
  const {isOpen, onOpen, onClose} = useDisclosure();

  useEffect(() => {
    if(isOpen){
      inputRef.current?.focus();
    }
  }, []);
  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      isCentered
      size={"xl"}
    >
      <ModalOverlay />
      <ModalContent>
          <ModalHeader>Modal Title</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Text>Platillo 10</Text>
            <Text>Platillo 11</Text>
            <Text>Platillo 12</Text>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme='blue' mr={3} onClick={onClose}>
              Close
            </Button>
            <Button variant='ghost'>Secondary Action</Button>
          </ModalFooter>
        </ModalContent>
      
    </Modal>
  )
}

export default CookOrders