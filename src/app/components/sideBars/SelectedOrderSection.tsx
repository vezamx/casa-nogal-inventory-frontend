import { Grid } from "@chakra-ui/react";
import React, { Dispatch, SetStateAction } from "react";
import MenuIconButton from "../Buttons/MenuIconButtons";

interface SelectedOrderSectionProps {
  setSelectedOrder: Dispatch<SetStateAction<string>>;
}
const SelectedOrderSection = () => {
  return (
    <Grid
      as={"section"}
      w={"50%"}
      templateColumns={"repeat(4, 1fr)"}
      templateRows={"repeat(12, 1fr)"}
      mt={"10rem"}
    >
      <MenuIconButton label="Pagar" image="/Pagar.svg" />
      <MenuIconButton label="Dividir Cuenta" image="/dividirCuenta.svg" />
      <MenuIconButton label="Añadir Producto" image="/addProduct.svg" />
      <MenuIconButton label="Eliminar Producto" image="/eliminarProducto.svg" />
      <MenuIconButton label="Menú" image="/Menu.svg" size="lg" />
    </Grid>
  );
};

export default SelectedOrderSection;
//menú añadir producto buscar la forma de meterlo en un ternario usando reactContext
