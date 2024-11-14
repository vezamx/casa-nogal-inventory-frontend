"use client";
import { FC } from "react";
import { useQuery } from "@tanstack/react-query";
import {
  TableContainer,
  Table,
  Thead,
  Tr,
  Th,
  Tbody,
  Td,
} from "@chakra-ui/react";
import { useRouter } from "next/navigation";
import { TProduct } from "../types";

const Page: FC = () => {
  const router = useRouter();

  const { isLoading, isError, data } = useQuery<TProduct[]>({
    queryKey: ["items"],
    queryFn: async () => {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/productos`,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${localStorage.getItem("authToken")}`,
          },
        },
      );
      if (!response.ok || response.status >= 400) {
        throw new Error("Error al cargar los datos");
      }
      return response.json();
    },
  });

  const handleSelectItem = (id: string) => {
    router.push(`/inventarios/productos/${id}`);
  };

  return (
    <>
      {isLoading && <p>Cargando...</p>}
      {isError && <p>Error al cargar los datos</p>}
      {data && (
        <TableContainer border={".5px solid"} mt={6} borderRadius={"lg"}>
          <Table variant="simple">
            <Thead>
              <Tr>
                <Th>Número</Th>
                <Th>Nombre</Th>
                <Th isNumeric>Costo</Th>
              </Tr>
            </Thead>
            <Tbody>
              {data.map((item) => (
                <Tr
                  key={item.id}
                  _hover={{ cursor: "pointer", bgColor: "gray.300" }}
                  onClick={() => handleSelectItem(item.id)}
                >
                  <Td>{item.id}</Td>
                  <Td>{item.nombre}</Td>
                  <Td isNumeric>{item.costo}</Td>
                </Tr>
              ))}
            </Tbody>
          </Table>
        </TableContainer>
      )}
    </>
  );
};

export default Page;
