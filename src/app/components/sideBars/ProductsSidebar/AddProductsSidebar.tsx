import { AddMenuPageContext } from "@/app/context/AddMenuPageContext";
import { selectedOrderContext } from "@/app/context/SelectedOrderContext";
import { useApiExecute } from "@/app/hooks/useApiCall";
import { Button, ButtonGroup, useToast, VStack } from "@chakra-ui/react";
import { useQueryClient } from "@tanstack/react-query";
import { FC, useContext } from "react";
import { OrderProductContainer } from "./SelectedOrderSidebar";
import { IComanda } from "@/app/types";
import { API_HOOKS_QUERY_KEYS } from "@/utils/constants";

export const AddProductSidebar: FC = () => {
  const { products, setProducts, setShowAddMenuPage } =
    useContext(AddMenuPageContext);
  const { selectedOrder } = useContext(selectedOrderContext);
  const toast = useToast();

  const queryClient = useQueryClient();

  const { mutate, isPending } = useApiExecute<IComanda>({
    url: `/comandas/addProducts/${selectedOrder}`,
    urlKey: ["addProductsToOrder"],
    method: "PUT",
    queryProps: {
      onSuccess: () => {
        toast({
          title: "Productos agregados a la orden",
          status: "success",
          duration: 2500,
          isClosable: true,
          onCloseComplete: () => {
            setShowAddMenuPage(false);
            queryClient.refetchQueries({
              queryKey: [API_HOOKS_QUERY_KEYS.SELECTED_COMANDA, selectedOrder],
            });
          },
        });
      },
      onError: () => {
        toast({
          title: "Error al agregar productos a la orden",
          status: "error",
          duration: 3000,
          isClosable: true,
        });
      },
    },
  });

  const handleSubmitAddProducts = () => {
    mutate({
      ProductList: products.map((item) => ({
        productId: item.product.id,
        documentId: item.product.documentId,
        quantity: item.quantity,
      })),
    });
  };

  const handleEditProductquantity = (index: number, action: "inc" | "dec") => {
    setProducts((prev) =>
      prev
        .map((product, i) => {
          if (i === index) {
            if (action === "dec" && product.quantity - 1 <= 0) return null;
            return {
              ...product,
              quantity:
                action === "inc"
                  ? product.quantity + 1
                  : product.quantity - 1 < 0
                  ? 0
                  : product.quantity - 1,
            };
          }
          return product;
        })
        .filter((product) => product !== null)
    );
  };

  return (
    <>
      <VStack bgColor={"brand.yellow.light"} w="100%" height={"50%"} py={10}>
        {products.length > 0 &&
          products.map((product, index) => (
            <OrderProductContainer
              key={`prroducto-lista-${index}`}
              product={product.product}
              quantity={product.quantity}
              handleEditProductQuantity={handleEditProductquantity}
              isEditing
              index={index}
            />
          ))}
      </VStack>
      <ButtonGroup>
        <Button isLoading={isPending} onClick={() => setProducts([])}>
          Limpiar
        </Button>
        <Button isLoading={isPending} onClick={handleSubmitAddProducts}>
          Guardar
        </Button>
      </ButtonGroup>
    </>
  );
};
