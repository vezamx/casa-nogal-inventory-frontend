import {
  Divider,
  Flex,
  Text,
  FlexProps,
  Box,
  Image,
  Button,
  FormLabel,
  Input,
  FormControl,
  BoxProps,
  Textarea,
  Spacer,
  InputLeftElement,
  InputGroup,
  Table,
  TableContainer,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
  IconButton,
  Portal,
  useDisclosure,
  useToast,
} from "@chakra-ui/react";
import { FC, useCallback, useContext, useEffect, useState } from "react";
import { TInsumo, TProduct } from "../types";
import { FaCheck, FaPencil, FaTrash } from "react-icons/fa6";
import { ConfirmModal } from "./ConfirmModal";
import {
  SelectOperationItemContext,
  SelectedOperationItemProvider,
} from "../context/SelectedOperationItemContext";
import { MdCancel } from "react-icons/md";
import { useQueryClient } from "@tanstack/react-query";
import { AddInsumoModal } from "./AddProductModal";

interface ProductDetailsProps {
  producto: TProduct;
}

const ProductDetails: FC<ProductDetailsProps> = ({ producto }) => {
  const [isEditingInfo, setIsEditingInfo] = useState(false);

  const [productData, setProductData] = useState<TProduct>(producto);

  const {
    isOpen: isConfirmOpen,
    onOpen: onOpenConfirm,
    onClose: onCloseConfirm,
  } = useDisclosure();

  const {
    isOpen: isAddInsumoOpen,
    onOpen: onOpenAddInsumo,
    onClose: onCloseAddInsumo,
  } = useDisclosure();

  const handleInputchanges = useCallback(
    (value: string, field: string) => {
      setProductData((prev) => ({
        ...prev,
        [field]: value,
      }));
    },
    [setProductData],
  );

  useEffect(() => {
    setProductData(producto);
  }, [producto]);

  return (
    <Flex as={"main"} width={"100%"} height="100%" gap={6}>
      <Flex as={"section"} width={"30%"}>
        <Container
          title="Imagen"
          width="100%"
          mt={4}
          height={"60%"}
          maxHeight={"80%"}
        >
          <Image
            fallbackSrc={"/imagenotfound.png"}
            alt="Imagen del producto"
            aspectRatio={4 / 3}
            h={"80%"}
            mt={4}
            fit={"contain"}
          />
          <Flex w={"100%"} justify={"flex-end"}>
            <Button bgColor={"brand.yellow.primary"} mt={4} size={"sm"}>
              Actualizar
            </Button>
          </Flex>
        </Container>
      </Flex>
      <Flex flexDir={"column"} width={"70%"} height={"100%"} gap={4} py={4}>
        <Container
          title="Detalles"
          contentStyles={{
            display: "flex",
            gap: 4,
          }}
        >
          <Flex w={"50%"} flexDir={"column"}>
            <FormControl>
              <FormLabel>Nombre del Producto</FormLabel>
              <Input
                readOnly={!isEditingInfo}
                sx={{
                  cursor: !isEditingInfo ? "not-allowed" : "",
                }}
                value={productData.nombre}
                onChange={(e) => handleInputchanges(e.target.value, "nombre")}
              />
            </FormControl>
            <FormControl>
              <FormLabel>Descripcion</FormLabel>
              <Textarea
                isReadOnly={!isEditingInfo}
                sx={{
                  cursor: !isEditingInfo ? "not-allowed" : "",
                }}
                value={productData.descripcion}
                onChange={(e) =>
                  handleInputchanges(e.target.value, "descripcion")
                }
              />
            </FormControl>
          </Flex>
          <Flex w={"50%"} flexDir={"column"}>
            <FormControl>
              <FormLabel>Costo</FormLabel>
              <InputGroup>
                <InputLeftElement
                  pointerEvents="none"
                  color="gray.300"
                  fontSize="1.2em"
                >
                  $
                </InputLeftElement>

                <Input
                  isReadOnly={!isEditingInfo}
                  sx={{
                    cursor: !isEditingInfo ? "not-allowed" : "",
                  }}
                  value={productData.costo}
                  onChange={(e) => handleInputchanges(e.target.value, "costo")}
                />
              </InputGroup>
            </FormControl>
            <Spacer />
            <Button
              bgColor={!isEditingInfo ? "brand.yellow.primary" : ""}
              colorScheme={isEditingInfo ? "green" : "gray"}
              onClick={() => setIsEditingInfo((prev) => !prev)}
            >
              {isEditingInfo ? "Guardar cambios" : "Editar"}
            </Button>
          </Flex>
        </Container>
        <Container
          title="Insumos"
          contentStyles={{
            display: "flex",
            flexDir: "column",
            height: "100%",
            overflowY: "scroll",
          }}
        >
          <TableContainer p={4} flexGrow={1}>
            <SelectedOperationItemProvider>
              <Table size="sm">
                <Thead>
                  <Tr>
                    <Th>Nombre</Th>
                    <Th>Unidad</Th>
                    <Th isNumeric>Cantidad</Th>
                    <Th>Acciones</Th>
                  </Tr>
                </Thead>
                <Tbody>
                  {productData.insumos.map((insumo) => (
                    <InsumoItem
                      key={insumo.insumo.id}
                      insumo={insumo}
                      isEditing={isEditingInfo}
                      onOpenConfirmDelete={onOpenConfirm}
                      productoId={productData.id}
                    />
                  ))}
                </Tbody>
              </Table>

              <Portal>
                <ConfirmModal isOpen={isConfirmOpen} onClose={onCloseConfirm} />
                <AddInsumoModal
                  isOpen={isAddInsumoOpen}
                  onClose={onCloseAddInsumo}
                />
              </Portal>
            </SelectedOperationItemProvider>
          </TableContainer>
          <Flex justify={"flex-end"} p={4}>
            <Button colorScheme={"blue"} size={"sm"} onClick={onOpenAddInsumo}>
              Agregar insumo
            </Button>
          </Flex>
        </Container>
      </Flex>
    </Flex>
  );
};

interface InsumoItemProps {
  isEditing: boolean;
  productoId: string;
  insumo: { cantidad: number; insumo: TInsumo };
  onOpenConfirmDelete: () => void;
}

const InsumoItem: FC<InsumoItemProps> = ({
  insumo,
  onOpenConfirmDelete,
  productoId,
}) => {
  const { setSelectedInsumo } = useContext(SelectOperationItemContext);
  const [isEditing, setEditing] = useState(false);
  const [newQuantity, setNewQuantity] = useState<string>(insumo.cantidad + "");
  const [buttonDisabled, setButtonDisabled] = useState(false);
  const toast = useToast();
  const queryClient = useQueryClient();

  const handleUpdatequanitity = useCallback(async () => {
    setButtonDisabled(true);
    toast.promise(
      (async () => {
        const response = await fetch(
          `${process.env.NEXT_PUBLIC_API_URL}/productos/insumo/${productoId}`,
          {
            method: "PATCH",
            body: JSON.stringify({
              insumoId: insumo.insumo.id,
              cantidad: parseFloat(newQuantity),
            }),
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${localStorage.getItem("authToken")}`,
            },
          },
        );

        if (!response.ok || response.status >= 400) {
          throw new Error("Error al actualizar la cantidad del insumo");
        }
      })(),
      {
        loading: {
          title: "Actualizando...",
          description: "Espere un momento por favor",
        },
        success: {
          title: "Cantidad Actualizada",
          description: "La cantidad del insumo ha sido actualizada",
          duration: 2000,
          onCloseComplete: () => {
            setEditing(false);
            setButtonDisabled(false);
            queryClient.invalidateQueries({ queryKey: ["productItem"] });
          },
        },
        error: {
          title: "Error al actualizar",
          description: "Ha ocurrido un error al actualizar la cantidad",
          duration: 2000,
          onCloseComplete: () => {
            setButtonDisabled(false);
          },
        },
      },
    );
  }, [insumo, toast, newQuantity, productoId, queryClient]);

  return (
    <Tr>
      <Td>{insumo.insumo.nombre}</Td>
      <Td>{insumo.insumo.unidad}</Td>
      <Td isNumeric maxW={"25%"} w={isEditing ? "25%" : ""}>
        {isEditing ? (
          <Input
            isReadOnly={!isEditing}
            type="text"
            pattern="[0-9]+([,\.][0-9]+)?"
            sx={{
              cursor: !isEditing ? "not-allowed" : "",
            }}
            value={newQuantity}
            onChange={(e) => setNewQuantity(e.target.value)}
          />
        ) : (
          insumo.cantidad
        )}
      </Td>
      <Td display={"flex"} justifyContent={"flex-end"}>
        {!isEditing ? (
          <>
            <IconButton
              aria-label="Eliminar insumo"
              icon={<FaTrash />}
              variant={"ghost"}
              colorScheme={"red"}
              onClick={() => {
                setSelectedInsumo(insumo.insumo);
                onOpenConfirmDelete();
              }}
            />
            <IconButton
              aria-label="Editar Cantidad"
              icon={<FaPencil />}
              variant={"ghost"}
              colorScheme={"blue"}
              onClick={() => setEditing((prev) => !prev)}
            />
          </>
        ) : (
          <>
            <IconButton
              aria-label="Confirmar Cambios"
              icon={<FaCheck />}
              colorScheme="green"
              onClick={handleUpdatequanitity}
              variant={"ghost"}
              isDisabled={buttonDisabled}
            />
            <IconButton
              aria-label="Cancelar"
              icon={<MdCancel />}
              colorScheme="red"
              onClick={() => setEditing(false)}
              variant={"ghost"}
            />
          </>
        )}
      </Td>
    </Tr>
  );
};

type ContainerProps = FlexProps & {
  children: React.ReactNode;
  title: string;
  contentStyles?: BoxProps;
};
const Container: FC<ContainerProps> = ({
  children,
  title,
  contentStyles,
  ...props
}) => {
  return (
    <Flex
      as={"section"}
      boxShadow={"lg"}
      height={"50%"}
      bgColor={"white"}
      textAlign={"left"}
      flexDir={"column"}
      {...props}
    >
      <Text fontWeight={"semibold"} fontSize={"xl"} ml={2}>
        {title}
      </Text>
      <Divider fontSize={"3px"} color={"black"} />
      <Box px={2} {...contentStyles}>
        {children}
      </Box>
    </Flex>
  );
};

export default ProductDetails;
