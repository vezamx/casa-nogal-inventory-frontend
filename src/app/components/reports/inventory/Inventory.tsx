import { Center, Table, TableContainer, Tbody, Td, Th, Thead, Tr } from "@chakra-ui/react"

export const Inventory = () => {
  return (
    <Center>
    <TableContainer>
      <Table variant="striped" colorScheme="gray">
        <Thead>
          <Tr>
            <Th>Código</Th>
            <Th>Producto</Th>
            <Th>Unidad de medida</Th>
            <Th>Proveedor</Th>
            <Th>Descripción</Th>
            <Th>Stock Actual</Th>
            <Th>Cantidad entrada</Th>
            <Th>Fecha Entrada</Th>
            <Th>Cantidad Salida</Th>
            <Th>Fecha Salida</Th>
            <Th>Stock Total</Th>
            <Th>Responsable</Th>
          </Tr>
        </Thead>
        <Tbody>
          <Tr>
            <Td>12345678</Td>
            <Td>Tomate Guaje</Td>
            <Td>KG</Td>
            <Td>Tomateros de Sonora</Td>
            <Td>Tomate de la casa</Td>
            <Td>100</Td>
            <Td>50</Td>
            <Td>2023-05-01</Td>
            <Td>25</Td>
            <Td>2023-05-05</Td>
            <Td>75</Td>
            <Td>Juan Perez</Td>
          </Tr>
          <Tr>
            <Td>90123456</Td>
            <Td>Aguacate Hass</Td>
            <Td>Caja</Td>
            <Td>Aguacactes de Michoacan</Td>
            <Td>Aguacactes de Michoacan</Td>
            <Td>200</Td>
            <Td>60</Td>
            <Td>2023-05-01</Td>
            <Td>35</Td>
            <Td>2023-05-05</Td>
            <Td>85</Td>
            <Td>Juan Perez</Td>
          </Tr>
          <Tr>
            <Td>56789012</Td>
            <Td>Lechuga</Td>
            <Td>Unidad</Td>
            <Td>Lechugas de México</Td>
            <Td>Lechugas de México</Td>
            <Td>150</Td>
            <Td>30</Td>
            <Td>2023-05-01</Td>
            <Td>20</Td>
            <Td>2023-05-05</Td>
            <Td>130</Td>
            <Td>Juan Perez</Td>
          </Tr>
          <Tr>
            <Td>34567890</Td>
            <Td>Papa</Td>
            <Td>Unidad</Td>
            <Td>Papas de Puebla</Td>
            <Td>Papas de Puebla</Td>
            <Td>80</Td>
            <Td>40</Td>
            <Td>2023-05-01</Td>
            <Td>15</Td>
            <Td>2023-05-05</Td>
            <Td>65</Td>
            <Td>Juan Perez</Td>
          </Tr>
        </Tbody>
      </Table>
    </TableContainer>
    </Center>
  )
}
