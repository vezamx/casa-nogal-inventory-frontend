import React,
  {
    createContext,
    Dispatch,
    SetStateAction,
    useContext
  } from 'react';
import { YellowLine } from '../yellowLine/YellowLine';
import { Box, Flex } from '@chakra-ui/react';
// import { Viewport } from 'next';
import MenuBar from '../../components/menuBar/MenuBar';
import { IProduct } from '@/app/types';
import { FaArrowCircleLeft } from "react-icons/fa";
import { AddMenuPageContext } from '@/app/context/AddMenuPageContext';

interface IProductsContext {
  setAddProducts: Dispatch<SetStateAction<IProduct[]>>;
  setShowAddProducts: Dispatch<SetStateAction<boolean>>;
  products: IProduct[];
  showAddProductcs: boolean;
}

export const ProductsContext = createContext<IProductsContext | null>(null);

const addMenuPage = () => {
  const AddMenuContext = useContext(AddMenuPageContext);
  
  if (!AddMenuContext) {
    console.log("Contexto addmenu no disponible");
    return null;
  }

  const { setShowAddMenuPage } = AddMenuContext;

  return (
    <Flex
      w="100vw"
      h="100%"
    >
      <FaArrowCircleLeft
        className='cursor-pointer'
        size="60"
        title='Regresar a menú anterior'
        onClick={() => setShowAddMenuPage(false)}
      />
      <Box
        w="80%"
        className='bg-gray-100'
      >
      </Box>
    </Flex>
  )
}

export default addMenuPage
