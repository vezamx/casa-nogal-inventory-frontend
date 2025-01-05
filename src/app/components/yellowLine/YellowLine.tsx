import { IconButton, Flex } from "@chakra-ui/react";
import { FaChevronLeft } from "react-icons/fa";
import { FC, useContext } from "react";
import { AddMenuPageContext } from "@/app/context/AddMenuPageContext";

interface IYellowLineProps {}

export const YellowLine: FC<IYellowLineProps> = ({}) => {
  const { setShowAddMenuPage, showAddMenuPage, setProducts } =
    useContext(AddMenuPageContext);

  const handleBackClick = () => {
    setShowAddMenuPage(false);
    setProducts([]);
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
      {showAddMenuPage && (
        <IconButton
          aria-label="Volver"
          icon={<FaChevronLeft />}
          bg="brand.gray"
          color="white"
          _hover={{ bg: "gray.500" }}
          onClick={handleBackClick}
        />
      )}
    </Flex>
  );
};
