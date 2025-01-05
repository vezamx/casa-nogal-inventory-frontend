import { AddMenuPageContext } from "@/app/context/AddMenuPageContext";
import { useApiGetInfo } from "@/app/hooks/useApiCall";
import { IProduct } from "@/app/types";
import {
  Box,
  Flex,
  Grid,
  GridItem,
  IconButton,
  Image,
  Input,
  InputGroup,
  InputRightElement,
  Text,
} from "@chakra-ui/react";
import React, { useContext, useEffect, useMemo, useState } from "react";
import { FaPlus } from "react-icons/fa";
import { FaX } from "react-icons/fa6";
import { ApiErrorDisplay } from "../errors/ApiErrorDisplay";
import { IndefinteLoadingSpinner } from "../loading/LoadingSpinner";

const addMenuPage = () => {
  const [searchText, setSearchText] = useState("");
  const [debouncedSearchText, setDebouncedSearchText] = useState("");

  const { products, setProducts } = useContext(AddMenuPageContext);

  const { data, isLoading, error } = useApiGetInfo<IProduct[]>({
    url: `/productos?${
      !!debouncedSearchText
        ? `filters[name][$containsi]=${debouncedSearchText}&`
        : ""
    }fields[0]=name&fields[1]=price`,
    urlKey: ["productos", debouncedSearchText],
    wrappedBy: "data",
  });

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.toLowerCase();
    setSearchText(value);
  };

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setDebouncedSearchText(searchText);
    }, 200);

    return () => {
      clearTimeout(timeoutId);
    };
  }, [searchText]);

  const handleAddProduct = (product: IProduct) => {
    setProducts((prev) => [
      ...prev,
      {
        product,
        quantity: 1,
      },
    ]);
  };

  const filteredProducts = useMemo(() => {
    if (!data) return [];

    //Filter the products that are already in the order
    return data.filter(
      (product) =>
        !products.find((p) => p.product.documentId === product.documentId)
    );
  }, [products, data]);

  return (
    <Flex w="100%" h="100%" direction="column" bg="gray.50">
      <Box px={4} pb={4}>
        <InputGroup size="md">
          <Input
            placeholder="Buscar..."
            borderRadius="full"
            bg="white"
            boxShadow="sm"
            value={searchText}
            onChange={handleSearch}
          />

          {!!debouncedSearchText && (
            <InputRightElement>
              <IconButton
                aria-label="Buscar"
                icon={<FaX />}
                size="sm"
                bg="blue.300"
                _hover={{ bg: "blue.400" }}
                borderRadius="full"
                color="white"
                onClick={() => setSearchText("")}
              />
            </InputRightElement>
          )}
        </InputGroup>
      </Box>

      <Box flex="1" p={4}>
        <Grid
          templateColumns={{
            base: "repeat(1, 1fr)",
            md: "repeat(2, 1fr)",
            lg: "repeat(3, 1fr)",
          }}
          gap={6}
        >
          {isLoading && <IndefinteLoadingSpinner />}
          {error && <ApiErrorDisplay errorCode={500} />}
          {filteredProducts &&
            filteredProducts.map((producto, index) => (
              <GridItem
                key={`${index}`}
                bg="brand.yellow.primary"
                borderRadius="lg"
                boxShadow="md"
                p={4}
              >
                <Grid
                  templateColumns="1fr 2fr"
                  templateRows="repeat(3, 1fr)"
                  gap={2}
                  h="100%"
                >
                  <GridItem rowSpan={3}>
                    <Image
                      src="/image-not-found.png"
                      alt={producto.name}
                      borderRadius="md"
                      boxSize="80px"
                      objectFit="cover"
                      bg="white"
                    />
                  </GridItem>

                  <GridItem>
                    <Text fontWeight="bold" fontSize="md" isTruncated>
                      {producto.name}
                    </Text>
                  </GridItem>

                  <GridItem>
                    <Text fontSize="sm" color="gray.700">
                      ${producto.price.toFixed(2)}
                    </Text>
                  </GridItem>

                  <GridItem
                    display="flex"
                    justifyContent="flex-center"
                    alignItems="center"
                  >
                    <IconButton
                      aria-label="Agregar platillo"
                      icon={<FaPlus />}
                      size="sm"
                      bg="yellow.400"
                      color="white"
                      _hover={{ bg: "yellow.500" }}
                      borderRadius="full"
                      onClick={() => handleAddProduct(producto)}
                    />
                  </GridItem>
                </Grid>
              </GridItem>
            ))}
        </Grid>
      </Box>
    </Flex>
  );
};

export default addMenuPage;
