import { Flex, Image, Spacer, Text, VStack } from "@chakra-ui/react";
import Logo from "../../components/logo/Logo";
import { useContext, useEffect, useMemo } from "react";
import { selectedOrderContext } from "@/app/context/SelectedOrderContext";
import { useApiGetInfo } from "@/app/hooks/useApiCall";
import { IComanda, IProduct } from "@/app/types";
import { useQueryClient } from "@tanstack/react-query";
import { IndefinteLoadingSpinner } from "../loading/LoadingSpinner";

export const SidebarLeft = () => {
  const { selectedOrder } = useContext(selectedOrderContext);

  const queryClient = useQueryClient();

  const { data, isLoading, isError, refetch, status } = useApiGetInfo<IComanda>(
    {
      url: `/comandas/${selectedOrder}?populate=ProductList.producto&populate=Discounts`,
      urlKey: ["selectedcomanda", selectedOrder],
      queryProps: {
        enabled: false,
      },
    },
  );

  useEffect(() => {
    if (!!selectedOrder) {
      refetch();
    } else {
      queryClient.invalidateQueries({
        queryKey: ["selectedcomanda"],
        refetchType: "none",
      });
    }
  }, [selectedOrder, refetch, queryClient]);

  const subTotal = useMemo(() => {
    if (data) {
      return data.ProductList.reduce(
        (acc, product) => acc + product.producto.price * product.quantity,
        0,
      );
    }
    return 0;
  }, [data]);

  const descuentos = useMemo(() => {
    //First order the discounts by its priority, the isFixedQuantity discount must be applied first
    //
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
          data.ProductList.map((product, index) => (
            <OrderProductContainer
              key={`prroducto-lista-${index}`}
              product={product.producto}
              quantity={product.quantity}
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
}
const OrderProductContainer: React.FC<OrderProductContainerProps> = ({
  product,
  quantity,
}) => {
  return (
    <Flex w="100%">
      <Image
        src="http://localhost:1337/uploads/csm_no_image_d5c4ab1322_a5dd8749b2.jpg"
        alt="No se encontró la imagen"
        height={"80px"}
        p={2}
      />
      <Flex flex={1} flexDir={"column"} justify={"center"} pr={4} gap={3}>
        <Flex bgColor={"white"} boxShadow={"md"}>
          {product.name}
        </Flex>
        <Flex justify={"space-between"}>
          <Text bgColor={"white"} boxShadow={"md"} px={4}>
            {quantity} x $ {product.price}
          </Text>
          <Text bgColor={"white"} boxShadow={"md"} px={4}>
            $ {quantity * product.price}
          </Text>
        </Flex>
      </Flex>
    </Flex>
  );
};
