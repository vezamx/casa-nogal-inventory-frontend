import { useQuery } from "@tanstack/react-query";

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
