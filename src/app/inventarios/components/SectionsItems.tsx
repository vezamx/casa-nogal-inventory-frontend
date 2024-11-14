import { Flex, Text } from "@chakra-ui/react";
import { useRouter } from "next/navigation";

interface SectionItemsProps {
  item: string;
  isActive?: boolean;
}

const SectionItems: React.FC<SectionItemsProps> = ({ item, isActive }) => {
  const router = useRouter();
  return (
    <Flex
      flexDir="column"
      justify={"center"}
      h={"100%"}
      _after={
        isActive
          ? {
              content: '""',
              w: "100%",
              h: "4px",
              bgColor: "brand.yellow.primary",
              position: "relative",
              bottom: "-30%",
            }
          : {}
      }
      _hover={{ cursor: "pointer" }}
      onClick={() => router.push(`/inventarios/${item.toLowerCase()}`)}
    >
      <Text fontWeight="bold" fontSize={"large"}>
        {item}
      </Text>
    </Flex>
  );
};

export default SectionItems;
