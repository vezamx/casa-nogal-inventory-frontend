import { useMutation, useQuery } from "@tanstack/react-query";

interface ApiCallProps {
  url: string;
  urlKey: string[];
  wrappedBy?: string;
  queryProps?: {
    enabled: boolean;
  };
}

//* This hook is used to make a GET request to the API
// It receives an object with the following properties:
// - url: the endpoint to make the request
// - urlKey: the key to be used in the query, necesary for react query to have control on the state
// - wrappedBy: the key to be used to access the data in the response
// - queryProps: an object with propierties of react-query to modify the behavior of the hook
// It returns the request props to be used in the component that calls the hook,
//
// IMPORTANT: Please make sure to attach a type on the hook call for correct intellisense and readability of the code

export const useApiGetInfo = <T,>(props: ApiCallProps) => {
  const requestProps = useQuery<T>({
    queryKey: props.urlKey,
    queryFn: async () => {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/api${props.url}`,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${window.localStorage.getItem("qid")}`,
          },
        }
      );
      const data = await response.json();

      if (!response.ok || response.status >= 400) {
        throw new Error(data.message || "Something went wrong");
      }

      if (!props.wrappedBy) return data["data"];

      return data[props.wrappedBy];
    },
    ...props.queryProps,
  });

  return requestProps;
};

interface ApiOperationProps {
  method: "POST" | "PUT" | "DELETE";
  url: string;
  urlKey: string[];
  queryProps?: {
    onSuccess?: (data: unknown) => void;
    onError?: (error: Error) => void;
  };
  wrappedBy?: string | null;
}

//* This hook is used to make a POST, PUT or DELETE request to the API
// It receives an object with the following properties:
// - method: the method to be used in the request
// - url: the endpoint to make the request
// - urlKey: the key to be used in the query, necesary for react query to have control on the state
// - queryProps: an object with propierties of react-query to modify the behavior of the hook
// - wrappedBy: the key to be used to access the data in the response
// It returns the request props to be used in the component that calls the hook,
//
// IMPORTANT: Please make sure to attach a type on the hook call for correct intellisense and readability of the code

//Whenever you want to execute the mutation, execute the "mutate" function that is returned from the hook
// This function will recive as parameter the body of the request, it sould be stringified before passing it to the function
// Also follow the guidelines of the api to make the request: https://docs.strapi.io/dev-docs/api/rest

// Example: mutate(WrapRequest({ wrappedBy: "data", data: { guests: totalComensales } }));

export const useApiExecute = <T,>(props: ApiOperationProps) => {
  const requestProps = useMutation<T, Error, Record<string, any>>({
    mutationKey: props.urlKey,
    mutationFn: async (body: Record<string, any>) => {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/api${props.url}`,
        {
          method: props.method,
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(body),
        }
      );
      const data = await response.json();

      if (!response.ok || response.status >= 400) {
        throw new Error(data.message || "Something went wrong");
      }

      if (props.wrappedBy === null) return data;

      if (!props.wrappedBy) return data["data"];

      return data[props.wrappedBy];
    },
    ...props.queryProps,
  });

  return requestProps;
};
