import {
  Table,
  TableContainer,
  Tbody,
  Td,
  Th,
  Thead,
  Tr
} from "@chakra-ui/react";

export const OpenTables = () => {
  return (
    <>
      <TableContainer>
        <Table variant="striped" colorScheme="gray">
          <Thead>
            <Tr>
              <Th>Área</Th>
              <Th>Nombre Mesa</Th>
              <Th>Mesero(a)</Th>
              <Th>Ocupada</Th>
            </Tr>
          </Thead>
          <Tbody>
            <Tr>
              <Td>Chimenea</Td>
              <Td>Cálida</Td>
              <Td>Alvaro</Td>
              <Td>No</Td>
            </Tr>
            <Tr>
              <Td>Chimenea</Td>
              <Td>centro</Td>
              <Td>Cesar</Td>
              <Td>Sí</Td>
            </Tr>
            <Tr>
              <Td>Chimenea</Td>
              <Td>Central</Td>
              <Td>Jonathan</Td>
              <Td>si</Td>
            </Tr>
          </Tbody>
        </Table>
      </TableContainer>
    </>
  );
};
