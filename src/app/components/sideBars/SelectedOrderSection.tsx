import { Grid, useDisclosure } from "@chakra-ui/react";
import React, {
  Dispatch,
  SetStateAction,
  useState,
  useContext,
  useEffect,
} from "react";
import MenuIconButton from "../Buttons/MenuIconButtons";
//import { PayModal } from "../PayModal";
import PayWindow from "../payWindow/PayWindow";
import { comandasContext } from "../../context/ComandaContexts";
import { useRouter } from "next/navigation";

interface SelectedOrderSectionProps {
  setSelectedOrder: Dispatch<SetStateAction<string>>;
}
const SelectedOrderSection = () => {
  const [showPayWindow, setShowPayWindow] = useState(false);
  const {
    openPayModal,
    setOnlyMenu,
    setDeleteProduct,
    setAddProduct,
    onlyMenu,
    deleteProduct,
    addProduct,
    setPayModalMode,
  } = useContext(comandasContext);

  const router = useRouter();

  const handeleAddProductClick = () => {
    setAddProduct(true);
    setDeleteProduct(false);
    setOnlyMenu(false);
    router.push("menuWindow/#addProduct");
  };

  const handleDeleteProductClick = () => {
    setDeleteProduct(true);
    setAddProduct(false);
    setOnlyMenu(false);
    router.push("menuWindow/#deleteProduct");
  };

  const handleOnlyMenuClick = () => {
    setOnlyMenu(true);
    setDeleteProduct(false);
    setAddProduct(false);
    router.push("menuWindow/#onlyMenu");
  };

  const payWindow = () => {
    setShowPayWindow(true);
  };

  return (
    <>
      {
        showPayWindow
        ? <PayWindow />
        :
          <Grid
            as={"section"}
            w={"50%"}
            templateColumns={"repeat(4, 1fr)"}
            templateRows={"repeat(12, 1fr)"}
            mt={"10rem"}
          >
            <MenuIconButton
              label="Pagar"
              image="/Pagar.svg"
              onClick={payWindow} //{openPayModal}
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
      }
    </>
  );
};

export default SelectedOrderSection;
