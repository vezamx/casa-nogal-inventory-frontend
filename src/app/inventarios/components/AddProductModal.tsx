import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  Button,
  Flex,
  FormControl,
  Table,
  TableCaption,
  TableContainer,
  Tbody,
  Td,
  Tfoot,
  Th,
  Thead,
  Tr,
  IconButton,
  Input,
  Tooltip,
  useToast,
} from "@chakra-ui/react";
import {
  AutoComplete,
  AutoCompleteInput,
  AutoCompleteList,
  AutoCompleteItem,
} from "@choc-ui/chakra-autocomplete";
import { useState, useEffect } from "react";
import { TInsumo } from "../types";
import { FaTrash } from "react-icons/fa";
import { FaMinus } from "react-icons/fa6";

interface AddProductModalProps {
  isOpen: boolean;
  onClose: () => void;
}

interface TInsumoList {
  insumo: TInsumo;
  cantidad: number;
}

const fetchInsumos = async (query: string): Promise<TInsumo[]> => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/insumos?nombre=${query}`,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("authToken")}`,
      },
    },
  );

  if (!response.ok || response.status >= 400) {
    throw new Error("Error fetching insumos");
  }

  return response.json() as Promise<TInsumo[]>;
};
export const AddInsumoModal: React.FC<AddProductModalProps> = ({
  isOpen,
  onClose,
}) => {
  const [options, setOptions] = useState<TInsumo[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [value, setValue] = useState(null);
  const [selectedInsumos, setSelectedInsumos] = useState<TInsumoList[]>([]);
  const toast = useToast();

  const onChangeInputHandler = (evt: any) => {
    setValue(evt.target.value);
  };

  const onCloseCleanState = () => {
    onClose();
    setIsLoading(false);
    setValue(null);
    setSelectedInsumos([]);
  };

  const handleUpdateProducto = async () => {
    toast.promise(
      (async () => {
        const response = await fetch(
          `${process.env.NEXT_PUBLIC_API_URL}/productos`,
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${localStorage.getItem("authToken")}`,
            },
            body: JSON.stringify({
              insumos: selectedInsumos.map((i) => ({
                id: i.insumo.id,
                cantidad: i.cantidad,
              })),
            }),
          },
        );
        if (!response.ok || response.status >= 400) {
          throw new Error("Error creating product");
        }
        return response.json();
      })(),
      {
        loading: {
          title: "Creando producto",
          description: "Estamos creando el producto, por favor espera...",
        },
        success: {
          title: "Producto creado",
          description: "El producto ha sido creado exitosamente",
        },
        error: {
          title: "Error al crear el producto",
          description:
            "Hubo un error al crear el producto, por favor intenta de nuevo",
        },
      },
    );
  };

  useEffect(() => {
    if (value) {
      setIsLoading(true);
      const timer = setTimeout(
        () =>
          fetchInsumos(value).then((results) => {
            setOptions(results);
            setIsLoading(false);
          }),
        300,
      );

      return () => clearTimeout(timer);
    }
  }, [value, setOptions, setIsLoading]);

  return (
    <Modal
      isCentered
      onClose={onCloseCleanState}
      isOpen={isOpen}
      motionPreset="slideInBottom"
      size="3xl"
    >
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Agregar un insumo</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Flex flexDir={"column"} width="100%" h={"100%"} gap={6}>
            <Flex id="InputContainer">
              <FormControl w="100%">
                <AutoComplete openOnFocus isLoading={isLoading}>
                  <AutoCompleteInput
                    variant="filled"
                    onChange={onChangeInputHandler}
                    placeholder="Buscar un insumo, ej: arroz"
                  />
                  <AutoCompleteList>
                    {options.map((insumo) => (
                      <AutoCompleteItem
                        key={insumo.id}
                        value={insumo.nombre}
                        textTransform="capitalize"
                        onClick={() => {
                          setSelectedInsumos((prev) => [
                            ...prev,
                            { insumo: insumo, cantidad: 0 },
                          ]);
                          setValue(null);
                        }}
                      >
                        {insumo.nombre}
                      </AutoCompleteItem>
                    ))}
                  </AutoCompleteList>
                </AutoComplete>
              </FormControl>
            </Flex>
            <Flex id="ListContainer">
              {selectedInsumos.length > 0 && (
                <TableContainer
                  width={"100%"}
                  maxH={"10rem"}
                  overflowX={"auto"}
                >
                  <Table variant="simple">
                    <Thead>
                      <Tr>
                        <Th>Nombre</Th>
                        <Th>Unidad</Th>
                        <Th isNumeric>Cantidad</Th>
                        <Th></Th>
                      </Tr>
                    </Thead>
                    <Tbody>
                      {selectedInsumos.map((insumo) => (
                        <Tr key={insumo.insumo.id}>
                          <Td>{insumo.insumo.nombre}</Td>
                          <Td>{insumo.insumo.unidad}</Td>
                          <Td isNumeric>
                            <Input
                              type="number"
                              pattern="[0-9]+([,\.][0-9]+)?"
                              onChange={(e) => {
                                setSelectedInsumos((prev) =>
                                  prev.map((i) =>
                                    i.insumo.id === insumo.insumo.id
                                      ? {
                                          ...i,
                                          cantidad: parseFloat(e.target.value),
                                        }
                                      : i,
                                  ),
                                );
                              }}
                            />
                          </Td>
                          <Td display={"flex"} justifyContent={"flex-end"}>
                            <Tooltip
                              aria-label="Borrar Insumo de la lista"
                              label="Borrar insumo de la lista"
                            >
                              <IconButton
                                aria-label="Borrar Insumo de la lista"
                                icon={<FaMinus />}
                                variant="ghost"
                                onClick={() => {
                                  setSelectedInsumos((prev) =>
                                    prev.filter(
                                      (i) => i.insumo.id !== insumo.insumo.id,
                                    ),
                                  );
                                }}
                              />
                            </Tooltip>
                          </Td>
                        </Tr>
                      ))}
                    </Tbody>
                  </Table>
                </TableContainer>
              )}
            </Flex>
          </Flex>
        </ModalBody>
        <ModalFooter>
          <Button colorScheme="green">Aceptar Cambios</Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};
