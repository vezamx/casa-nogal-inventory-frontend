"use client";
import {
  Button,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  Text,
  useDisclosure,
  VStack,
} from "@chakra-ui/react";
import Image from "next/image";
import {
  FaCalendarCheck,
  FaHotel,
  FaRegStickyNote,
  FaStoreSlash,
  FaUserClock,
  FaUtensils,
  FaWarehouse
} from "react-icons/fa";

interface MenuItemProps {
  title: string;
  icon: JSX.Element;
  href: string;
}
const MenuItem: React.FC<MenuItemProps> = ({ title, icon, href }) => {
  return (
    <Button
      as="a"
      href={href}
      w="100%"
      variant="ghost"
      justifyContent="left"
      leftIcon={icon}
    >
      <Text ml={10}>{title}</Text>
    </Button>
  );
};

const MenuButton = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <button onClick={onOpen}>
        <Image
          className="ml-2 *flex items-start"
          src="/hamburguerMenu.svg"
          alt="clock"
          width={50}
          height={50}
        />
      </button>
      <Drawer isOpen={isOpen} placement="left" onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader py={16} backgroundColor={"brand.yellow"}>
            Menu Principal
          </DrawerHeader>

          <DrawerBody mt={5}>
            <VStack gap={6}>
              <MenuItem
                title="Pedidos"
                icon={
                  <FaRegStickyNote
                    style={{
                      fontSize: "2.5em",
                    }}
                  />
                }
                href="/pages/orders/"
              />
              <MenuItem
                title="Inventarios"
                icon={
                  <FaWarehouse
                    style={{
                      fontSize: "2.5em",
                    }}
                  />
                }
                href="/pages/inventory"
              />
              <MenuItem
                title="Abrir/Cerrar turno"
                icon={
                  <FaUserClock
                    style={{
                      fontSize: "2.5em",
                    }}
                  />
                }
                href="/pages/shifts/"
              />
              <MenuItem
                title="Alojamiento"
                icon={
                  <FaHotel
                    style={{
                      fontSize: "2.5em",
                    }}
                  />
                }
                href="#"
              />
              <MenuItem
                title="Eventos"
                icon={
                  <FaCalendarCheck
                    style={{
                      fontSize: "2.5em",
                    }}
                  />
                }
                href="#"
              />
              <MenuItem
                title="Cocina"
                icon={
                  <FaUtensils
                    style={{
                      fontSize: "2.5em",
                    }}
                  />
                }
                href="cook/"
              />
              <MenuItem
                title="Cerrar sistema"
                icon={
                  <FaStoreSlash
                    style={{
                      fontSize: "2.5em",
                    }}
                  />
                }
                href="/"
              />
            </VStack>
          </DrawerBody>

          <DrawerFooter></DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default MenuButton;
