import { selectedOrderContext } from "@/app/context/SelectedOrderContext";
import { useApiGetInfo } from "@/app/hooks/useApiCall";
import { IComanda, IProduct } from "@/app/types";
import {
  ButtonGroup,
  Flex,
  IconButton,
  Image,
  Spacer,
  Text,
  VStack,
} from "@chakra-ui/react";
import { API_HOOKS_QUERY_KEYS } from "@constants";
import { useQueryClient } from "@tanstack/react-query";
import { useContext, useEffect, useMemo } from "react";
import { FaMinus, FaPlus } from "react-icons/fa";
import { IndefinteLoadingSpinner } from "../loading/LoadingSpinner";
import Logo from "../logo/Logo";

export const OrderItemsSidebar = () => {
  const { selectedOrder, isEditingOrder, setIsEditingOrder } =
    useContext(selectedOrderContext);

  const queryClient = useQueryClient();

  const { data, isLoading, refetch } = useApiGetInfo<IComanda>({
    url: `/comandas/${selectedOrder}?populate=ProductList.producto&populate=Discounts`,
    urlKey: [API_HOOKS_QUERY_KEYS.SELECTED_COMANDA, selectedOrder],
    queryProps: {
      enabled: !!selectedOrder,
    },
  });

  useEffect(() => {
    if (!!selectedOrder) {
      refetch();
    } else {
      queryClient.invalidateQueries({
        queryKey: [API_HOOKS_QUERY_KEYS.SELECTED_COMANDA, selectedOrder],
        refetchType: "none",
      });
    }
  }, [selectedOrder, refetch, queryClient]);

  useEffect(() => {
    console.log("Cambios en data", data);
  }, [data]);

  useEffect(() => {
    if (!data || isLoading) return;

    if (!isEditingOrder.isEditing) {
      setIsEditingOrder((prev) => ({
        ...prev,
        editData: [],
      }));
    }

    setIsEditingOrder((prev) => ({
      ...prev,
      editData: data.ProductList,
    }));
  }, [data, isLoading, setIsEditingOrder, isEditingOrder.isEditing]);

  const handleEditProductquantity = (index: number, action: "inc" | "dec") => {
    setIsEditingOrder((prev) => ({
      ...prev,
      editData: prev.editData.map((product, i) => {
        if (i === index) {
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
      }),
    }));
  };

  const subTotal = useMemo(() => {
    if (data) {
      return data.ProductList.reduce(
        (acc, product) => acc + product.producto.price * product.quantity,
        0
      );
    }
    return 0;
  }, [data]);

  const descuentos = useMemo(() => {
    //First order the discounts by its priority, the isFixedQuantity discount must be applied first
    if (data) {
      let auxSubTotal = subTotal;
      const sortedDiscounts = data?.Discounts.sort((a, b) => {
        if (a.isFixedQuantity && !b.isFixedQuantity) {
          return -1;
        }
        if (!a.isFixedQuantity && b.isFixedQuantity) {
          return 1;
        }
        return 0;
      });

      sortedDiscounts.forEach((discount) => {
        if (discount.isFixedQuantity) {
          auxSubTotal -= discount.quantity;
        } else {
          auxSubTotal -= (discount.quantity / 100) * auxSubTotal;
        }
      });
      return subTotal - auxSubTotal;
    }

    return 0;
  }, [data, subTotal]);

  const total = useMemo(() => {
    return subTotal - descuentos;
  }, [subTotal, descuentos]);

  return (
    <Flex
      as={"aside"}
      gap={4}
      h="100vh"
      w="30%"
      className="bg-customYellow -screen  min-w-screen flex flex-col items-center  "
      p={4}
    >
      <Logo className="object-cover" width={200} height={200} />
      <VStack bgColor={"brand.yellow.light"} w="100%" height={"50%"} py={10}>
        {isLoading && <IndefinteLoadingSpinner />}
        {data &&
          !isEditingOrder.isEditing &&
          data.ProductList.map((product, index) => (
            <OrderProductContainer
              key={`prroducto-lista-${index}`}
              product={product.producto}
              quantity={product.quantity}
              handleEditProductQuantity={handleEditProductquantity}
              index={index}
            />
          ))}
        {isEditingOrder.isEditing &&
          isEditingOrder.editData.map((product, index) => (
            <OrderProductContainer
              key={`prroducto-lista-${index}`}
              product={product.producto}
              quantity={product.quantity}
              handleEditProductQuantity={handleEditProductquantity}
              index={index}
            />
          ))}
      </VStack>
      <Flex
        flexDir="column"
        w={"100%"}
        h="30%"
        bgColor={"brand.yellow.light"}
        p={5}
        gap={4}
      >
        <PriceDescriptionContainer title="Subtotal" price={subTotal} />
        <PriceDescriptionContainer title="Descuentos" price={descuentos} />
        <Spacer />
        <PriceDescriptionContainer title="Total" price={total} />
      </Flex>
    </Flex>
  );
};

interface PriceDescriptionContainerProps {
  title: string;
  price?: number;
}
const PriceDescriptionContainer: React.FC<PriceDescriptionContainerProps> = ({
  title,
  price = 0,
}) => {
  return (
    <Flex width={"100%"} h={10} bgColor={"white"} align={"center"} px={3}>
      <Text mr={5}>{title}</Text>
      <Text fontWeight={"bold"}>{price}</Text>
    </Flex>
  );
};

interface OrderProductContainerProps {
  product: IProduct;
  quantity: number;
  index: number;
  handleEditProductQuantity: (index: number, action: "inc" | "dec") => void;
}
const OrderProductContainer: React.FC<OrderProductContainerProps> = ({
  product,
  quantity,
  handleEditProductQuantity,
  index,
}) => {
  const { isEditingOrder } = useContext(selectedOrderContext);

  return (
    <Flex w="100%">
      <Image
        fallbackSrc="/image-not-found.png"
        alt="No se encontró la imagen"
        height={"6rem"}
        p={2}
      />
      <Flex flex={1} flexDir={"column"} justify={"center"} p={3} gap={3}>
        <Flex
          bgColor={"white"}
          boxShadow={"md"}
          py={1}
          px={4}
          textDecor={
            isEditingOrder.isEditing && quantity === 0 ? "line-through" : ""
          }
        >
          {product.name}
        </Flex>
        <Flex justify={"space-between"} align={"center"}>
          <Text
            bgColor={"white"}
            boxShadow={"md"}
            px={4}
            py={1}
            textDecor={
              isEditingOrder.isEditing && quantity === 0 ? "line-through" : ""
            }
          >
            {quantity} x $ {product.price}
          </Text>
          {isEditingOrder.isEditing && (
            <ButtonGroup gap={3}>
              <IconButton
                aria-label="decrease quantity"
                icon={<FaMinus />}
                variant={"ghost"}
                _hover={{
                  bgColor: "green.400",
                }}
                onClick={() => handleEditProductQuantity(index, "dec")}
              />
              <IconButton
                aria-label="increase quantity"
                icon={<FaPlus />}
                variant={"ghost"}
                _hover={{
                  bgColor: "red.300",
                }}
                onClick={() => handleEditProductQuantity(index, "inc")}
              />
            </ButtonGroup>
          )}
          <Text bgColor={"white"} boxShadow={"md"} px={4} py={1}>
            $ {quantity * product.price}
          </Text>
        </Flex>
      </Flex>
    </Flex>
  );
};
