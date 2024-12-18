import { Grid, useToast } from "@chakra-ui/react";
import { FC, useCallback, useContext } from "react";
import MenuIconButton from "../Buttons/MenuIconButtons";
import { selectedOrderContext } from "@/app/context/SelectedOrderContext";
import { useQueryClient } from "@tanstack/react-query";
import { API_HOOKS_QUERY_KEYS } from "@constants";
import { AddMenuPageContext } from "@/app/context/AddMenuPageContext";

interface SelectedOrderSectionProps {}

const SelectedOrderSection: FC<SelectedOrderSectionProps> = () => {
  const { handleChangeisEditing, isEditingOrder, selectedOrder } =
    useContext(selectedOrderContext);

  const handleSetEditingOrder = () => {
    handleChangeisEditing(isEditingOrder.editData);
  };

  const AddMenuContext = useContext(AddMenuPageContext);

  const toast = useToast();

  const queryClient = useQueryClient();

  const handleEditOrderRequest = useCallback(async () => {
    const execUpdate = async () => {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/api/comandas/setProducts/${selectedOrder}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            ProductList: isEditingOrder.editData
              ?.map((item) => ({
                quantity: item.quantity,
                producto: {
                  documentId: item.producto.documentId,
                },
              }))
              .filter((item) => item.quantity > 0),
          }),
        }
      );
      if (!response.ok || response.status >= 400) {
        console.error(response);
        throw new Error("Error al enviar los cambios");
      }
    };

    toast.promise(execUpdate(), {
      loading: {
        title: "Enviando cambios",
        description: "Estamos enviando los cambios al servidor",
      },
      success: {
        title: "Cambios enviados",
        description: "Los cambios se han enviado correctamente",
        duration: 1500,
        onCloseComplete() {
          handleChangeisEditing();
          queryClient.refetchQueries({
            queryKey: [API_HOOKS_QUERY_KEYS.SELECTED_COMANDA, selectedOrder],
          });
        },
      },
      error: {
        title: "Error al enviar los cambios",
        description:
          "Ha ocurrido un error al enviar los cambios, por favor intenta de nuevo",
      },
    });
  }, [isEditingOrder.editData]);

  if(!AddMenuContext){
    console.error("AddMenuPageContext no está disponible.");
    return null;
  }
  const { setShowAddMenuPage } = AddMenuContext;

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
      <MenuIconButton
        label="Añadir Producto"
        image="/addProduct.svg"
        onClick={() => setShowAddMenuPage(true)}
      />
      {!isEditingOrder.isEditing ? (
        <MenuIconButton
          label={"Editar Comanda"}
          image="/eliminarProducto.svg"
          onClick={handleSetEditingOrder}
        />
      ) : (
        <>
          <MenuIconButton
            label="Aceptar cambios"
            size="sm"
            image="/eliminarProducto.svg"
            onClick={handleEditOrderRequest}
          />
          <MenuIconButton
            size="sm"
            label="Cancelar Edicion"
            image="/eliminarProducto.svg"
            onClick={() => handleChangeisEditing()}
          />
        </>
      )}

      <MenuIconButton label="Menú" image="/Menu.svg" size="lg" />
    </Grid>
  );
};

export default SelectedOrderSection;
