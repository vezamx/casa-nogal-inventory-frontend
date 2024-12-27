import {
  Input,
  InputGroup,
  InputRightAddon,
  IconButton,
  Flex,
} from "@chakra-ui/react";
import { FaSearch, FaChevronLeft } from "react-icons/fa";
import { useContext } from "react";
import { AddMenuPageContext } from "@/app/context/AddMenuPageContext";

interface IYellowLineProps {
  isInAddMenuPage?: boolean;
}

export const YellowLine = ({ isInAddMenuPage }: IYellowLineProps) => {
  const AddMenuPage = useContext(AddMenuPageContext);

  if (!AddMenuPage) {
    throw new Error("AddMenuPageContext no está disponible.");
  }

  const { setShowAddMenuPage } = AddMenuPage;

  const handleBackClick = () => {
    setShowAddMenuPage(false);
  };

  return (
    <Flex
      className="h-12 max-w-full"
      w="100%"
      bg="brand.yellow.primary"
      alignItems="center"
      justifyContent="space-between"
      px={4}
    >
      {isInAddMenuPage && (
        <IconButton
          aria-label="Volver"
          icon={<FaChevronLeft />}
          bg="brand.gray"
          color="white"
          _hover={{ bg: "gray.500" }}
          onClick={handleBackClick}
        />
      )}

      {!isInAddMenuPage && (
      <Flex w="100%" justifyContent="flex-end" height="100%">
        <InputGroup width="30%" height="100%" mt="10px">
          <Input
            placeholder="Buscar"
            bgColor="white"
            h="70%"
            borderRadius={20}
          />
          <InputRightAddon h="70%" borderRightRadius={20} bg="blue.400">
            <FaSearch />
          </InputRightAddon>
        </InputGroup>
      </Flex>
      )}
    </Flex>
  );
};
