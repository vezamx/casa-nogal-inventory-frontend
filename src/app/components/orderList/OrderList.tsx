import { Checkbox, Button, VStack, Box } from '@chakra-ui/react';
import React, { FC, useState } from 'react';

interface Order {
    id: number;
    name: string;
}

interface OrderListProps {
    orders: Order[];
    onMerge: (selectedOrders: Order[]) => void;
}

const OrderList: FC<OrderListProps> = ({ orders, onMerge }) => {
    const [selectedOrders, setSelectedOrders] = useState<Order[]>([]);

    const toggleSelectOrder = (order: Order) => {
        setSelectedOrders((prevSelected) =>
            prevSelected.includes(order)
                ? prevSelected.filter((o) => o.id !== order.id)
                : [...prevSelected, order]
        );
    };

    const handleMerge = () => {
        if (selectedOrders.length > 1) {
            onMerge(selectedOrders);
        } else {
            alert('Selecciona al menos dos órdenes para unir.');
        }
    };

    return (
        <VStack align="start" spacing={3}>
            {orders.map((order) => (
                <Checkbox
                    key={order.id}
                    isChecked={selectedOrders.includes(order)}
                    onChange={() => toggleSelectOrder(order)}
                >
                    {order.name}
                </Checkbox>
            ))}
            <Button colorScheme="teal" onClick={handleMerge}>
                Unir Órdenes
            </Button>
        </VStack>
    );
};

export default OrderList;
