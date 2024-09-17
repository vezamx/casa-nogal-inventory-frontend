import { Grid, useDisclosure } from "@chakra-ui/react";
import React, { Dispatch, SetStateAction, useState, useContext } from "react";
import MenuIconButton from "../Buttons/MenuIconButtons";
//import { PayModal } from "../PayModal";
import { comandasContext } from "../../context/ComandaContexts";
import { useRouter } from "next/navigation";

interface SelectedOrderSectionProps {
  setSelectedOrder: Dispatch<SetStateAction<string>>;
}
const SelectedOrderSection = () => {
  const { openPayModal } = useContext(comandasContext);
  const router = useRouter();
  
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
      <MenuIconButton
        label="Menú"
        image="/Menu.svg"
        size="lg"
        onClick={() => router.push("menuWindow")}
      />
    </Grid>
  );
};

export default SelectedOrderSection;
