"use strict";
import {
  Table,
  TableContainer,
  Tbody,
  Td,
  Th,
  Thead,
  Tr
} from "@chakra-ui/react";
import { FC } from "react";

interface KitchenProps {
  zone?: string;
}

export const Kitchen: FC<KitchenProps> = (props) => {
  const zoneArea = props.zone === "kitchen" ? "Cocina" : "Cafetería";

  return (
    <>
      <TableContainer>
        <Table variant='striped' colorScheme='gray'>
          <Thead>
            <Tr>
              <Th>Hora pedido</Th>
              <Th>Producto solicitado</Th>
              <Th>Cantidad</Th>
              <Th>Hora salida de {zoneArea}</Th>
              <Th>Mesero(a)</Th>
            </Tr>
          </Thead>
          <Tbody>
            <Tr>
              <Td>01/01/2024 10:10:10</Td>
              <Td>Camarones Agustinos</Td>
              <Td>2 (platillos)</Td>{/*ver como agregar al pedido UM*/}
              <Td>01/01/2024 10:20:00</Td>
              <Td>Juan Perez</Td>
            </Tr>
            <Tr>
              <Td>01/01/2024 10:10:10</Td>
              <Td>Camarones Agustinos</Td>
              <Td>2 (platillos)</Td>{/*ver como agregar al pedido UM*/}
              <Td>01/01/2024 10:20:00</Td>
              <Td>Juan Perez 2</Td>
            </Tr>
            <Tr>
              <Td>01/01/2024 10:10:10</Td>
              <Td>Camarones Agustinos</Td>
              <Td>2 (platillos)</Td>{/*ver como agregar al pedido UM*/}
              <Td>01/01/2024 10:20:00</Td>
              <Td>Juan Perez 2</Td>
            </Tr>
            <Tr>
              <Td>01/01/2024 10:10:10</Td>
              <Td>Camarones Agustinos</Td>
              <Td>2 (platillos)</Td>{/*ver como agregar al pedido UM*/}
              <Td>01/01/2024 10:20:00</Td>
              <Td>Juan Perez 2</Td>
            </Tr>
          </Tbody>
        </Table>
      </TableContainer>
    </>
  );
};
