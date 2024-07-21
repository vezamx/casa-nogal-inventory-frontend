import { Input, InputGroup, InputRightAddon } from "@chakra-ui/react";
import { FaSearch } from "react-icons/fa";

export const YellowLine = ({}) => {
  return (
    <>
      <div className="h-8 max-w-full w-full bg-customYellow flex justify-end items-center">
        <InputGroup
          width="30%"
          mr={3}
          h="100%"
          display="flex"
          alignItems={"center"}
        >
          <Input
            placeholder="Buscar"
            bgColor="white"
            h="90%"
            borderRadius={20}
            mt={2}
          />
          <InputRightAddon h="90%" borderRightRadius={20} mt={2}>
            <FaSearch />
          </InputRightAddon>
        </InputGroup>
      </div>
      <div className="h-12 max-w-full bg-customYellow"></div>
    </>
  );
};
