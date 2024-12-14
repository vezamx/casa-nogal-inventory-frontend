import { useApiExecute } from "@/app/hooks/useApiCall";
import { IComanda } from "@/app/types";
import { API_HOOKS_QUERY_KEYS } from "@constants";
import { WrapRequest } from "@/utils/utils";
import {
  Button,
  Flex,
  Grid,
  NumberDecrementStepper,
  NumberIncrementStepper,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  Popover,
  PopoverArrow,
  PopoverBody,
  PopoverCloseButton,
  PopoverContent,
  PopoverHeader,
  PopoverTrigger,
  forwardRef,
  useBoolean,
  useToast,
} from "@chakra-ui/react";
import { useQueryClient } from "@tanstack/react-query";
import React, { useCallback, useEffect } from "react";
import MenuIconButton from "../Buttons/MenuIconButtons";

const OperationsSection: React.FC = () => {
  const toast = useToast();
  const [isEditing, setIsEditing] = useBoolean();

  const [totalComensales, setTotalComensales] = React.useState(1);

  const queryClient = useQueryClient();

  const { mutate, status } = useApiExecute<IComanda>({
    method: "POST",
    url: "/comandas",
    urlKey: [API_HOOKS_QUERY_KEYS.CREATE_COMANDA],
    queryProps: {
      onSuccess() {
        setIsEditing.off();
        queryClient.invalidateQueries({
          queryKey: [API_HOOKS_QUERY_KEYS.COMANDAS],
        });
      },
    },
  });

  useEffect(() => {
    if (status === "pending") {
      toast({
        title: "Creando comanda",
        description: "Espere un momento",
        status: "info",
        duration: null,
        isClosable: false,
      });
    }
    if (status === "success") {
      toast({
        title: "Comanda creada",
        description: "La comanda ha sido creada exitosamente",
        status: "success",
        duration: 1500,
        isClosable: true,
        onCloseComplete() {
          toast.closeAll();
        },
      });
    }
    if (status === "error") {
      toast({
        title: "Error al crear comanda",
        description: "Hubo un error al crear la comanda",
        status: "error",
        duration: 1500,
        isClosable: true,
        onCloseComplete() {
          toast.closeAll();
        },
      });
    }
  }, [status, toast]);

  const handleCreateOrder = useCallback(() => {
    mutate(
      WrapRequest({ wrappedBy: "data", data: { guests: totalComensales } })
    );
  }, [toast]);

  const RefComponent = forwardRef((props, ref) => {
    return (
      <MenuIconButton
        label="Crear Comanda"
        image="/Pagar.svg"
        size="lg"
        innerRef={ref}
        {...props}
      />
    );
  });

  return (
    <Grid
      as={"section"}
      w={"50%"}
      templateColumns={"repeat(4, 1fr)"}
      templateRows={"repeat(12, 1fr)"}
      mt={"10rem"}
    >
      <Popover
        placement="right"
        closeOnBlur={false}
        isOpen={isEditing}
        onClose={setIsEditing.off}
        onOpen={setIsEditing.on}
      >
        <PopoverTrigger>
          <RefComponent />
        </PopoverTrigger>

        <PopoverContent>
          <PopoverArrow />
          <PopoverCloseButton />
          <PopoverHeader>Ingresa numero de comensales</PopoverHeader>
          <PopoverBody>
            <Flex flexDir="column" gap={3} p={3} align={"center"}>
              <NumberInput
                defaultValue={1}
                min={1}
                value={totalComensales}
                onChange={(valueString) =>
                  setTotalComensales(parseInt(valueString))
                }
              >
                <NumberInputField placeholder="Escribe el número de comensales" />
                <NumberInputStepper>
                  <NumberIncrementStepper />
                  <NumberDecrementStepper />
                </NumberInputStepper>
              </NumberInput>
              {/* <Input
                placeholder="Numero de comensales"
                type="number"
                aria-label="Numero de comensales"
                onChange={(e) => setTotalComensales(Number(e.target.value))}
                pattern="[0-9]*"
                value={totalComensales}
              /> */}
              <Button onClick={handleCreateOrder} colorScheme="teal">
                Crear Comanda
              </Button>
            </Flex>
          </PopoverBody>
        </PopoverContent>
      </Popover>
      {/* <Menu> */}
      {/*   <MenuList> */}
      {/*     <MenuIconButton */}
      {/*       as={MenuButton} */}
      {/*       size={"lg"} */}
      {/*       label="Crear Comanda" */}
      {/*       image="/Pagar.svg" */}
      {/*       // onClick={handleCreateOrder} */}
      {/*     /> */}
      {/**/}
      {/*     <MenuItem>Download</MenuItem> */}
      {/*     <MenuItem>Create a Copy</MenuItem> */}
      {/*     <MenuItem>Mark as Draft</MenuItem> */}
      {/*     <MenuItem>Delete</MenuItem> */}
      {/*     <MenuItem>Attend a Workshop</MenuItem> */}
      {/*   </MenuList> */}
      {/* </Menu> */}
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
