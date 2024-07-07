import { useDisclosure } from "@chakra-ui/react";
import React, { createContext } from "react";
import AuthorizationModal from "../components/AuthorizationModal";
import { UseAuthenticationCb, UseAuthentitactionParams } from "@/types/types";

type AuthorizationContextType = {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
  requestInfo?: UseAuthentitactionParams;
  setRequestInfo: (requestInfo: UseAuthentitactionParams) => void;
};
export const AuthorizationContext = createContext<
  AuthorizationContextType | undefined
>(undefined);

export const AuthorizationModalProvider: React.FC<{
  children: React.ReactNode;
}> = ({ children }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [requestInfo, setRequestInfo] = React.useState<
    UseAuthentitactionParams | undefined
  >();
  return (
    <AuthorizationContext.Provider
      value={{
        isOpen,
        onOpen,
        onClose,
        requestInfo,
        setRequestInfo,
      }}
    >
      {children}
      <AuthorizationModal />
    </AuthorizationContext.Provider>
  );
};
