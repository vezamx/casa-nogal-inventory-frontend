import { Grid } from "@chakra-ui/react";
import React, { useState, Dispatch, FC, SetStateAction } from "react";
import RestaurantMenu  from "./RestaurantMenu";
import MenuIconButton from "../Buttons/MenuIconButtons";
import { selectedOrderContext } from "@/app/context/SelectedOrderContext";
import { useQueryClient } from "@tanstack/react-query";
import { API_HOOKS_QUERY_KEYS } from "@constants";
interface SelectedOrderSectionProps {}
const SelectedOrderSection: FC<SelectedOrderSectionProps> = () => {
  const { handleChangeisEditing, isEditingOrder, selectedOrder } =
    useContext(selectedOrderContext);

  const handleSetEditingOrder = () => {
    handleChangeisEditing(isEditingOrder.editData);
  };

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
