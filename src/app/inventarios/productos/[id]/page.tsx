"use client";
import { useQuery } from "@tanstack/react-query";
import ProductDetails from "../../components/ProductDetails";
import { TProduct } from "../../types";
import { useEffect } from "react";

const Page: React.FC<{ params: { id: string } }> = ({ params }) => {
  const { isLoading, error, data } = useQuery<TProduct>({
    queryKey: ["productItem", params.id],
    queryFn: async () => {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/productos/${params.id}`,
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

  useEffect(() => {
    console.log("Aqui se rendirza, checa el insumo", data);
  }, [data]);

  return (
    <>
      {isLoading && <p>Cargando...</p>}
      {error && <p>Error al cargar los datos</p>}
      {data && <ProductDetails producto={data} />}
    </>
  );
};

export default Page;
