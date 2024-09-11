import { Grid, useDisclosure } from "@chakra-ui/react";
import React, { Dispatch, SetStateAction, useState } from "react";
import MenuIconButton from "../Buttons/MenuIconButtons";
import { PayModal } from "../PayModal";

interface SelectedOrderSectionProps {
  setSelectedOrder: Dispatch<SetStateAction<string>>;
}
const SelectedOrderSection = () => {
  const [comandaContext, setComandaContext] = useState('ComandasContext');
  const [overLay, setOverLay] = useState(<PayModal />);
  const { isOpen, onOpen, onClose } = useDisclosure()
  
  return (
    <Grid
      as={"section"}
      w={"50%"}
      templateColumns={"repeat(4, 1fr)"}
      templateRows={"repeat(12, 1fr)"}
      mt={"10rem"}
    >
      <MenuIconButton label="Pagar" image="/Pagar.svg" onClick={
        () => {
          setOverLay(<PayModal />)
          onOpen()
        }}
      />
      <MenuIconButton label="Dividir Cuenta" image="/dividirCuenta.svg" />
      <MenuIconButton label="Añadir Producto" image="/addProduct.svg" />
      <MenuIconButton label="Eliminar Producto" image="/eliminarProducto.svg" />
      <MenuIconButton label="Menú" image="/Menu.svg" size="lg" />
    </Grid>
  );
};

export default SelectedOrderSection;
