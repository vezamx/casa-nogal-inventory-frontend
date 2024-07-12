"use client";
import React from "react";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import { AuthorizationModalProvider } from "@/app/context/AuthorizationModalProvider";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
interface ProvidersProps {
  children: React.ReactNode;
}

const Providers: React.FC<ProvidersProps> = ({ children }) => {
  const customTheme = extendTheme({
    colors: {
      brand: {
        yellow: { primary: "#FDCB5C", light: "#fedb8d" },
        gray: "#4A6572",
        background: "#EEEEEE",
      },
    },
  });

  const queryClient = new QueryClient();
  return (
    <React.Fragment>
      <ChakraProvider theme={customTheme}>
        <QueryClientProvider client={queryClient}>
          <AuthorizationModalProvider>{children}</AuthorizationModalProvider>
        </QueryClientProvider>
      </ChakraProvider>
    </React.Fragment>
  );
};

export default Providers;
