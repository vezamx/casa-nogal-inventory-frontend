import { Input, InputGroup, InputRightAddon } from "@chakra-ui/react";
import { CustomInputs } from "../CustomInputs";
import { FaSearch } from "react-icons/fa";

export const YellowLine = ({ searchData = false }) => {
  return (
    <>
      {searchData ? (
        <div className="h-12 max-w-full w-full bg-customYellow flex justify-end items-center">
          <InputGroup
            width="30%"
            mr={3}
            h="100%"
            display="flex"
            alignItems={"center"}
          >
            <Input placeholder="Buscar" bgColor="white" h="70%" />
            <InputRightAddon h="70%">
              <FaSearch />
            </InputRightAddon>
          </InputGroup>
        </div>
      ) : (
        <div className="h-12 max-w-full bg-customYellow"></div>
      )}
    </>
  );
};
