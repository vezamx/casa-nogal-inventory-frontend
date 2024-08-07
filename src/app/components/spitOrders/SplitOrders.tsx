// pages/index.tsx
import { Box, Button, Heading, Text } from '@chakra-ui/react';
import React, { useState } from 'react';
import CustomModal from '../customModal/CustomModal';
import OrderList from '../orderList/OrderList';

const orders = [
    { id: 1, name: 'Orden 1' },
    { id: 2, name: 'Orden 2' },
    { id: 3, name: 'Orden 3' },
    // ... más órdenes
];

const SplitOrders: React.FC = () => {
    const [isModalOpen, setModalOpen] = useState(false);
    const [mergedOrder, setMergedOrder] = useState<string | null>(null);

    const handleMerge = (selectedOrders: { id: number; name: string }[]) => {
        const mergedOrderNames = selectedOrders
            .map((order) => order.name)
            .join(', ');
        setMergedOrder(mergedOrderNames);
        setModalOpen(false);
    };

    return (
        <Box p={5}>
            <Heading mb={4}>Restaurante</Heading>
            <Button colorScheme="blue" onClick={() => setModalOpen(true)}>
                Ver Órdenes
            </Button>

            {mergedOrder && (
                <Text mt={4} fontSize="lg" color="green.500">
                    Órdenes Unidas: {mergedOrder}
                </Text>
            )}

            <CustomModal
                isOpen={isModalOpen}
                onClose={() => setModalOpen(false)}
            >
                <OrderList orders={orders} onMerge={handleMerge} />
            </CustomModal>
        </Box>
    );
};

export default SplitOrders;
