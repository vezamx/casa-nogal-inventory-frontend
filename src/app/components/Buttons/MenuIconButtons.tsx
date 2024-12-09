import Image from "next/image";
import { Button, GridItem, Text } from "@chakra-ui/react";
type sizesVariant = "sm" | "md" | "lg";
type MenuIconButtonProps = {
  label: string;
  image?: string;
  size?: sizesVariant;
} & React.ComponentProps<typeof Button>;

const sizesMap = new Map<sizesVariant, number>([
  ["md", 2],
  ["lg", 4],
  ["sm", 1],
]);

const MenuIconButton: React.FC<MenuIconButtonProps> = ({
  label,
  image,
  size = "md",
  ...otherProperties
}) => {
  return (
    <GridItem colSpan={sizesMap.get(size)} m={3}>
      <Button
        variant="ghost"
        display={"flex"}
        bgColor={"brand.yellow.primary"}
        flexDir={"column"}
        _hover={{ bgColor: "brand.yellow.light" }}
        h={"100%"}
        w={"100%"}
        p={3}
        boxShadow={"lg"}
        {...otherProperties}
      >
        {image && <Image src={image} alt={label} width={60} height={60} />}
        <Text mt={3}>{label}</Text>
      </Button>
    </GridItem>
  );
};

export default MenuIconButton;
