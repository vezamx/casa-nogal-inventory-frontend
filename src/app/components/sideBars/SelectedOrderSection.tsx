import { Grid, useDisclosure } from "@chakra-ui/react";
import React, { Dispatch, SetStateAction, useState, useContext } from "react";
import MenuIconButton from "../Buttons/MenuIconButtons";
//import { PayModal } from "../PayModal";
import { comandasContext } from "../../context/ComandaContexts";

interface SelectedOrderSectionProps {
  setSelectedOrder: Dispatch<SetStateAction<string>>;
}
const SelectedOrderSection = () => {
  // const [comandaContext, setComandaContext] = useState('ComandasContext');
  // const [overLay, setOverLay] = useState(<PayModal />);
  // const { isOpen, onOpen, onClose } = useDisclosure()
  // const comandaContext = useContext(comandasContext);
  // if(!comandaContext){
  //   return null; //cuando el contexto no esta disponible
  // }

  const { openPayModal } = useContext(comandasContext);
  
  return (
    <Grid
      as={"section"}
      w={"50%"}
      templateColumns={"repeat(4, 1fr)"}
      templateRows={"repeat(12, 1fr)"}
      mt={"10rem"}
    >
      <MenuIconButton label="Pagar" image="/Pagar.svg" onClick={openPayModal}
      />
      <MenuIconButton label="Dividir Cuenta" image="/dividirCuenta.svg" />
      <MenuIconButton label="Añadir Producto" image="/addProduct.svg" />
      <MenuIconButton label="Eliminar Producto" image="/eliminarProducto.svg" />
      <MenuIconButton label="Menú" image="/Menu.svg" size="lg" />
    </Grid>
  );
};

export default SelectedOrderSection;
