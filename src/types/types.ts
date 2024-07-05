export type UseAuthentitactionParams =
  | {
      method: "GET";
      url: string;
      params?: string;
    }
  | {
      method: "POST" | "PUT" | "DELETE" | "PATCH";
      url: string;
      body?: Record<string, unknown>;
    };
