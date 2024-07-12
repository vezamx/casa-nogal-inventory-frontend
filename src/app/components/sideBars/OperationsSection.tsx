import { Grid } from "@chakra-ui/react";
import React from "react";
import MenuIconButton from "../Buttons/MenuIconButtons";

const OperationsSection: React.FC = () => {
  return (
    <Grid
      as={"section"}
      w={"50%"}
      templateColumns={"repeat(4, 1fr)"}
      templateRows={"repeat(12, 1fr)"}
      mt={"10rem"}
    >
      <MenuIconButton label="Corte Parcial" image="/corteParcial.svg" />
      <MenuIconButton label="Corte Total" image="/corteCaja.svg" />
      <MenuIconButton
        label="Cancelar cuenta"
        image="/cancelComanda.svg"
        size="lg"
      />
    </Grid>
  );
};

export default OperationsSection;
