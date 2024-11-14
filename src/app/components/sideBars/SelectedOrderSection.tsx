import { Grid } from "@chakra-ui/react";
import React, { useState, Dispatch, FC, SetStateAction } from "react";
import RestaurantMenu  from "./RestaurantMenu";
import MenuIconButton from "../Buttons/MenuIconButtons";

const SelectedOrderSection: FC<SelectedOrderSectionProps> = ({
  setSelectedOrder,
}) => {
  const [showMenu, setShowMenu] = useState(false);

  const handleClick = (buttonName: string) => {
    if (buttonName === "RestaurantMenu") {
      setShowMenu(true);
    }
  };

  return (
    <Grid
      as={"section"}
      w={"50%"}
      templateColumns={"repeat(4, 1fr)"}
      templateRows={"repeat(12, 1fr)"}
      mt={"10rem"}
    >
      {showMenu
        ? ( <RestaurantMenu /> )
        : (
        <>
          <MenuIconButton label="Pagar" image="/Pagar.svg" />
          <MenuIconButton label="Dividir Cuenta" image="/dividirCuenta.svg" />
          <MenuIconButton label="Añadir Producto" image="/addProduct.svg" />
          <MenuIconButton
            label="Eliminar Producto"
            image="/eliminarProducto.svg"
          />
          <MenuIconButton
            label="Menú"
            image="/Menu.svg"
            size="lg"
            onClick={() => handleClick("RestaurantMenu")}
          />
        </>
      )}
    </Grid>
  );
};

export default SelectedOrderSection;
//menú añadir producto buscar la forma de meterlo en un ternario usando reactContext
