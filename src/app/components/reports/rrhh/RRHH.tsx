import { Center, Table, TableContainer, Tbody, Td, Th, Thead, Tr } from "@chakra-ui/react"

export const RRHH = () => {
  return (
    <Center>
    <TableContainer>
      <Table variant="striped" colorScheme="gray">
        <Thead>
          <Tr>
            <Th>Código</Th>
            <Th>Nombre empleado</Th>{/* (completo) */}
            <Th>Área Asignada</Th>
            <Th>Hora entrada</Th>
            <Th>Hora Salida</Th>
            <Th>Tiempo extra</Th>
            <Th>Faltas</Th>
            <Th>Suedo diario</Th>
            <Th>Sueldo a pagar</Th>
            <Th>Fecha de pago</Th>
            <Th>¿Incapacitado(a)?</Th>
          </Tr>
        </Thead>
        <Tbody>
          <Tr>
            <Td>12345678</Td>
            <Td>Juan Perez</Td>
            <Td>Cocina</Td>
            <Td>2023-05-01 08:00:00</Td>
            <Td>2023-05-01 18:00:00</Td>
            <Td>02:00:00</Td>
            <Td>0</Td>
            <Td>$600.00</Td>
            <Td>$600.00</Td>
            <Td>2023-05-05</Td>
            <Td>No</Td>
          </Tr>
          <Tr>
            <Td>23456789</Td>
            <Td>María López</Td>
            <Td>Recepción</Td>
            <Td>2023-05-01 08:30:00</Td>
            <Td>2023-05-01 17:30:00</Td>
            <Td>01:00:00</Td>
            <Td>1</Td>
            <Td>$550.00</Td>
            <Td>$550.00</Td>
            <Td>2023-05-05</Td>
            <Td>Si</Td>
          </Tr>
          <Tr>
            <Td>34567890</Td>
            <Td>Carlos García</Td>
            <Td>Administración</Td>
            <Td>2023-05-01 09:00:00</Td>
            <Td>2023-05-01 18:00:00</Td>
            <Td>01:00:00</Td>
            <Td>0</Td>
            <Td>$700.00</Td>
            <Td>$700.00</Td>
            <Td>2023-05-05</Td>
            <Td>No</Td>
          </Tr>
          <Tr>
            <Td>45678901</Td>
            <Td>Laura Martínez</Td>
            <Td>Bar</Td>
            <Td>2023-05-01 09:15:00</Td>
            <Td>2023-05-01 18:15:00</Td>
            <Td>00:45:00</Td>
            <Td>0</Td>
            <Td>$650.00</Td>
            <Td>$650.00</Td>
            <Td>2023-05-05</Td>
            <Td>Si</Td>
          </Tr>
          <Tr>
            <Td>56789012</Td>
            <Td>Juanito Pérez</Td>
            <Td>Seguridad</Td>
            <Td>2023-05-01 10:00:00</Td>
            <Td>2023-05-01 19:00:00</Td>
            <Td>01:00:00</Td>
            <Td>0</Td>
            <Td>$600.00</Td>
            <Td>$600.00</Td>
            <Td>2023-05-05</Td>
            <Td>No</Td>
          </Tr>
        </Tbody>
      </Table>
    </TableContainer>
    </Center>
  )
}
