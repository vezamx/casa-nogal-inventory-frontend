import { Flex, IconButton, Text } from "@chakra-ui/react";
import React from "react";
import { FaTrash } from "react-icons/fa";

interface OrderListButtonProps {
  orderName: string;
  ableToDelete?: boolean;
  isSelected?: boolean;
  onClick?: () => void;
}

export const OrderListButton: React.FC<OrderListButtonProps> = ({
  orderName,
  isSelected,
  onClick,
  ableToDelete,
}) => {
  return (
    <Flex
      width="100%"
      h={8}
      justify={"flex-start"}
      alignItems={"center"}
      px={3}
      py={5}
      _hover={
        isSelected ? {} : { bg: "gray.100", boxShadow: "xl", cursor: "pointer" }
      }
      bg={isSelected ? "gray.100" : "white"}
      boxShadow={isSelected ? "lg" : "none"}
      onClick={onClick}
    >
      <Text>{orderName}</Text>
      {ableToDelete && (
        <IconButton
          aria-label="delete"
          icon={<FaTrash />}
          variant="ghost"
          colorScheme="red"
          size="sm"
          ml="auto"
        />
      )}
    </Flex>
  );
};

export default OrderListButton;
