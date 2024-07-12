"use client";
import { Box, Center, ScaleFade, Text } from "@chakra-ui/react";
import { useState } from "react";

import Logo from "@/app/components/logo/Logo";
import MenuButton from "../../components/menuButton/MenuButton";
import { YellowLine } from "../../components/yellowLine/YellowLine";

const Hosting = () => {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <Box w="full">
      <Box className="bg-customGray mb-0">
        {/* no toma bg='customGray*/}
        <Box>
          <MenuButton />
          <YellowLine />
        </Box>
      </Box>
      <ScaleFade initialScale={0.9} in={isOpen}>
        <Box>
          <Center>
            <Text fontSize="6xl" mt={6} as="u">
              En construción
            </Text>
          </Center>
          <Center>
            <Box
              display="flex"
              justifyContent="center"
              alignItems="center"
              borderRadius="full"
              overflow="hidden"
              w={42}
              h={42}
              mb={4}
            >
              <Logo
                className={"w-full h-full object-cover"}
                width={2000}
                height={2000}
              />
            </Box>
          </Center>
        </Box>
      </ScaleFade>
    </Box>
  );
};

export default Hosting;
