export type UseAuthentitactionParams =
  | {
      method: "GET";
      url: string;
      params?: string;
      options?: {
        onSuccess: (data: any) => void;
        onError: (error: any) => void;
      };
    }
  | {
      method: "POST" | "PUT" | "DELETE" | "PATCH";
      url: string;
      body?: Record<string, unknown>;
      options?: {
        onSuccess: (data: any) => void;
        onError: (error: any) => void;
      };
    };

export type UseAuthenticationCb = {
  onSuccess: (data: any) => void;
  onError: (error: any) => void;
};
