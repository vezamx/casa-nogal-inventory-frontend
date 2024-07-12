import { Flex, Text } from "@chakra-ui/react";
import React from "react";

interface OrderListButtonProps {
  orderName: string;
  isSelected?: boolean;
  onClick?: () => void;
}

export const OrderListButton: React.FC<OrderListButtonProps> = ({
  orderName,
  isSelected,
  onClick,
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
    </Flex>
  );
};

export default OrderListButton;
