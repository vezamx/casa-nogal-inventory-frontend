import { Grid } from "@chakra-ui/react";
import { FC, useContext } from "react";
import MenuIconButton from "../Buttons/MenuIconButtons";
import { selectedOrderContext } from "@/app/context/SelectedOrderContext";

interface SelectedOrderSectionProps {}
const SelectedOrderSection: FC<SelectedOrderSectionProps> = () => {
  const { setIsEditingOrder, isEditingOrder } =
    useContext(selectedOrderContext);

  const handleChangeisEditing = () => setIsEditingOrder((prev) => !prev);

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
      {!isEditingOrder ? (
        <MenuIconButton
          label={"Editar Comanda"}
          image="/eliminarProducto.svg"
          onClick={handleChangeisEditing}
        />
      ) : (
        <>
          <MenuIconButton
            label="Aceptar cambios"
            size="sm"
            image="/eliminarProducto.svg"
            onClick={() => console.log("Enviar cambios al backend")}
          />
          <MenuIconButton
            size="sm"
            label="Cancelar Edicion"
            image="/eliminarProducto.svg"
            onClick={handleChangeisEditing}
          />
        </>
      )}

      <MenuIconButton label="Menú" image="/Menu.svg" size="lg" />
    </Grid>
  );
};

export default SelectedOrderSection;
