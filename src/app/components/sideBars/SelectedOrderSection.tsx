import { Grid, useDisclosure } from "@chakra-ui/react";
import React, { Dispatch, SetStateAction, useState, useContext } from "react";
import MenuIconButton from "../Buttons/MenuIconButtons";
//import { PayModal } from "../PayModal";
import { comandasContext } from "../../context/ComandaContexts";
import { useRouter } from "next/navigation";

interface SelectedOrderSectionProps {
  setSelectedOrder: Dispatch<SetStateAction<string>>;
}
const SelectedOrderSection = () => {
  // const { openPayModal } = useContext(comandasContext);
  // const router = useRouter();
  // const onlyMenu:boolean = true;
  // const deleteProduct:boolean = true;
  // const addProduct:boolean = true;
  const {
    openPayModal,
    setOnlyMenu,
    setDeleteProduct,
    setAddProduct,
    onlyMenu,
    deleteProduct,
    addProduct
  } = useContext(comandasContext);

  const router = useRouter();

  const handeleAddProductClick = () =>{
    setAddProduct(true);
    setDeleteProduct(false);
    setOnlyMenu(false);
    router.push("menuWindow/#addProduct");
  };

  const handleDeleteProductClick = () =>{
    setDeleteProduct(true);
    setAddProduct(false);
    setOnlyMenu(false);
    router.push("menuWindow/#deleteProduct");
  };

  const handleOnlyMenuClick = () =>{
    setOnlyMenu(true);
    setDeleteProduct(false);
    setAddProduct(false);
    router.push("menuWindow/#onlyMenu");
  };
  
  return (
    <Grid
      as={"section"}
      w={"50%"}
      templateColumns={"repeat(4, 1fr)"}
      templateRows={"repeat(12, 1fr)"}
      mt={"10rem"}
    >
      <MenuIconButton label="Pagar" image="/Pagar.svg" onClick={openPayModal}
      />
      <MenuIconButton label="Dividir Cuenta" image="/dividirCuenta.svg" />
      <MenuIconButton
        label="Añadir Producto"
        image="/addProduct.svg"
        // onClick={() => router.push(`menuWindow/#${addProduct}`)}
        onClick={handeleAddProductClick}
      />
      <MenuIconButton
        label="Eliminar Producto"
        image="/eliminarProducto.svg"
        // onClick={() => router.push(`menuWindow/#${deleteProduct}`)}
        onClick={handleDeleteProductClick}
      />
      <MenuIconButton
        label="Menú"
        image="/Menu.svg"
        size="lg"
        // onClick={() => router.push(`menuWindow/#${onlyMenu}`)}
        onClick={handleOnlyMenuClick}
      />
    </Grid>
  );
};

export default SelectedOrderSection;
