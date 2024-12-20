"use client";
import { useEffect, useMemo, useState } from "react";
import Logo from "./components/logo/Logo";
import MenuBar from "./components/menuBar/MenuBar";
import { Button, useToast } from "@chakra-ui/react";
// import { useAuthorization } from "./hooks/useAuthorization";
import { useApiExecute } from "./hooks/useApiCall";
import { useRouter } from "next/navigation";

export default function Home() {
  const [horaACtual, setHoraActual] = useState<string>();

  const router = useRouter();

  const toast = useToast();

  const { mutate } = useApiExecute<{ identifier: string; password: string }>({
    url: "/auth/local",
    method: "POST",
    urlKey: ["login"],
    wrappedBy: null,
    queryProps: {
      onSuccess(data) {
        const { jwt } = data as { jwt: string };

        window.localStorage.setItem("qid", jwt);
        router.replace("/orderMenu");
      },
      onError(error) {
        toast({
          title: "No se pudo abrir el sistema",
          description: "Mensaje de error: " + error.message,
          status: "error",
          duration: 5000,
          isClosable: true,
        });
      },
    },
  });

  // const { callApiWithToken } = useAuthorization();
  useEffect(() => {
    const interval = setInterval(() => {
      setHoraActual(new Date().toLocaleTimeString());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const token = useMemo(() => {
    return window.localStorage.getItem("qid");
  }, []);

  if (token) {
    window.location.replace("/orderMenu");
    return;
  }

  const handleOpenSystem = () => {
    mutate({
      identifier: process.env.NEXT_PUBLIC_POS_IDENTIFIER,
      password: process.env.NEXT_PUBLIC_POS_CREDENTIAL,
    });
    // callApiWithToken({
    //   url: "/api/auth/login",
    //   method: "POST",
    //   body: {
    //     indentifier: process.env.NEXT_PUBLIC_POS_IDENTIFIER,
    //     password: process.env.NEXT_PUBLIC_POS_CREDENTIAL,
    //   },
    // });
  };
  return (
    <div className="min-h-screen flex flex-col bg-gray-100">
      <MenuBar />
      <div className="flex flex-1 flex-col justify-center items-center">
        <div className="flex justify-center items-center rounded-full overflow-hidden w-42 h-42 mb-4">
          <Logo
            className="w-full h-full object-cover"
            width={200}
            height={200}
          />
        </div>
        <h1 className="text-4xl font-bold text-gray-800 text-center mb-4">
          Bienvenido a Casa Nogal
        </h1>
        <hr className="h-px my-4 bg-gray-200 border-2 w-full max-w-md" />
        <h2 className="text-3xl font-semibold text-gray-700 text-center mb-4">
          La hora actual es: {horaACtual}
        </h2>
        <h2 className="text-3xl font-semibold text-gray-700 text-center mb-4">
          El sistema se encuentra cerrado
        </h2>
        <Button colorScheme="teal" onClick={handleOpenSystem}>
          Abrir sistema
        </Button>

        {/* {delayNextText && (
          <div className="flex justify-center items-center mt-2">
            <div className="animate-pulse flex justify-center items-center h-100 w-100 rounded-full bg-gray-200 ml-4 text-2xl">
              Acceso garantizado ingresando al sistema
            </div>
          </div>
        )} */}
      </div>
    </div>
  );
}
