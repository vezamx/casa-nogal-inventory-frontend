import { useContext, useEffect, useState } from "react";
import { AuthorizationContext } from "../context/AuthorizationModalProvider";
import { useMutation, useQuery } from "@tanstack/react-query";
import { UseAuthentitactionParams } from "@/types/types";

export const useAuthorization = () => {
  const context = useContext(AuthorizationContext);
  const [token, setToken] = useState("");

  if (!context) {
    throw new Error(
      "useAuthorization must be used within an AuthorizationModalProvider",
    );
  }

  const {
    isPending: isLoading,
    error,
    data,
    mutate,
    reset,
  } = useMutation({
    mutationFn: async (
      requestObj: UseAuthentitactionParams & { token: string },
    ) => {
      if (!token || !context.requestInfo) {
        throw new Error("Token or requestData not set");
      }
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}${requestObj.url}`,
        {
          method: requestObj.method,
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
      );
      const data = await response.json();
      if (data.statusCode && data.statusCode > 400) {
        throw new Error(data.message || "Error");
      }

      return data;
    },
    onError: (error) => {
      console.error("Error madafaker", error);
    },
    onSuccess: (data) => {
      console.log("Data", data);
    },
  });

  useEffect(() => {
    if (data && !error) {
      console.log("Recibimos datos");
    } else {
    }
  }, [data, error]);

  const { onOpen, onClose, isOpen } = context;

  const callApiWithToken = ({ method, url, cb }: UseAuthentitactionParams) => {
    context && context.setRequestInfo({ method, url, cb });

    reset();

    onOpen && onOpen();
  };

  const executeQuery = () => {
    if (!context.requestInfo || !token) {
      throw new Error("Request data not set");
    }

    mutate({
      method: context.requestInfo.method,
      url: context.requestInfo.url,
      token,
      cb: context.requestInfo.cb,
    });
  };

  return {
    isOpen,
    onClose,
    setToken,
    token,
    callApiWithToken,
    isLoading,
    error,
    data,
    exec: executeQuery,
  };
};
