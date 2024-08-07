import { Grid, Text } from '@chakra-ui/react';
import React, { useState, Dispatch, SetStateAction } from 'react';
import MenuIconButton from '../Buttons/MenuIconButtons';
import CustomModal from '../customModal/CustomModal';
import OrderList from '../orderList/OrderList';

interface SelectedOrderSectionProps {
    setSelectedOrder: Dispatch<SetStateAction<string>>;
}

const orders = [
    { id: 1, name: 'Orden 1' },
    { id: 2, name: 'Orden 2' },
    { id: 3, name: 'Orden 3' },
];

const SelectedOrderSection = () => {
    const [isModalOpened, setModalOpened] = useState(false);
    const [mergedOrder, setMergedOrder] = useState<string | null>(null);

    const handleMerge = (selectedOrders: { id: number; name: string }[]) => {
        const mergedOrderNames = selectedOrders
            .map((order) => order.name)
            .join(', ');
        setMergedOrder(mergedOrderNames);
        setModalOpen(false);
    };

    return (
        <Grid
            as={'section'}
            w={'50%'}
            templateColumns={'repeat(4, 2fr)'}
            templateRows={'repeat(12, 1fr)'}
            mt={'10rem'}
        >
            <MenuIconButton label="Pagar" image="/Pagar.svg" />
            <MenuIconButton label="Menú" image="/Menu.svg" />
            <MenuIconButton label="Dividir Cuenta" image="/dividirCuenta.svg" />
            <MenuIconButton
                label="Unir Cuentas"
                image="/agregarCuenta.svg"
                onClick={() => setModalOpened(true)}
            />
            <MenuIconButton label="Añadir Producto" image="/addProduct.svg" />
            <MenuIconButton
                label="Eliminar Producto"
                image="/eliminarProducto.svg"
            />
            {mergedOrder && (
                <Text mt={4} fontSize="lg" color="green.500">
                    Órdenes Unidas: {mergedOrder}
                </Text>
            )}

            <CustomModal
                isOpen={isModalOpened}
                onClose={() => setModalOpened(false)}
            >
                <OrderList orders={orders} onMerge={handleMerge} />
            </CustomModal>
        </Grid>
    );
};

export default SelectedOrderSection;
