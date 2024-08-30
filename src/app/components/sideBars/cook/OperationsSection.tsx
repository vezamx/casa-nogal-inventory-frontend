import { Grid } from "@chakra-ui/react";
import React from "react";
import MenuIconButton from "../../Buttons/MenuIconButtons";

const OperationsSection: React.FC = () => {
  return (
    <Grid
      as={"section"}
      w={"50%"}
      templateColumns={"repeat(4, 1fr)"}
      templateRows={"repeat(12, 1fr)"}
      mt={"10rem"}
    >
      {/* <MenuIconButton label="Órdenes Pendientes" image="/corteParcial.svg" />
      <MenuIconButton label="Órdenes Finalizadas" image="/corteCaja.svg" />
      <MenuIconButton
        label="Cancelar cuenta"
        image="/cancelComanda.svg"
        size="lg"
      /> */}
      <MenuIconButton label="Órdenes Pendientes" />{/* Falta activar el evento onclick */}
      <MenuIconButton label="Órdenes Finalizadas"  />
    </Grid>
  );
};

export default OperationsSection;
