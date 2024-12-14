import Image from "next/image";
import { Button, GridItem, Text } from "@chakra-ui/react";
type sizesVariant = "sm" | "md" | "lg";
type MenuIconButtonProps = {
  label: string;
  image?: string;
  size?: sizesVariant;
<<<<<<< HEAD
  onClick?:() => void;
}
=======
  innerRef?: React.Ref<HTMLButtonElement>;
} & React.ComponentProps<typeof Button>;
>>>>>>> 7c465b0 (feat(comanda): added comanda create button and operations)

const sizesMap = new Map<sizesVariant, number>([
  ["md", 2],
  ["lg", 4],
  ["sm", 1],
]);

const MenuIconButton: React.FC<MenuIconButtonProps> = ({
  label,
  image,
  size = "md",
<<<<<<< HEAD
  onClick
=======
  innerRef,
  ...otherProperties
>>>>>>> 7c465b0 (feat(comanda): added comanda create button and operations)
}) => {
  return (
    <GridItem colSpan={sizesMap.get(size)} m={3} role="button">
      <Button
        variant="ghost"
        display={"flex"}
        bgColor={"brand.yellow.primary"}
        flexDir={"column"}
        _hover={{ bgColor: "brand.yellow.light" }}
        ref={innerRef}
        h={"100%"}
        w={"100%"}
        p={3}
        boxShadow={"lg"}
        onClick={onClick}
      >
        {image && <Image src={image} alt={label} width={60} height={60} />}
        <Text mt={3}>{label}</Text>
      </Button>
    </GridItem>
  );
};

export default MenuIconButton;
