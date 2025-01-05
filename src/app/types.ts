export enum EComandaStatus {
  OPEN = "open",
  CLOSED = "closed",
  CANCELED = "canceled",
}

export type TComandaStatus = `${EComandaStatus}`;

export interface IComanda {
  id: string;
  documentId: string;
  guests: number;
  comandaStatus: string;
  ProductList: IProductList[];
  Discounts: IDiscount[];
}

export interface IProductList {
  id: string;
  quantity: number;
  producto: IProduct;
}

export interface IProduct {
  id: number;
  documentId: string;
  name?: string;
  price: number;
}

export interface IDiscount {
  id: number;
  isFixedQuantity: boolean;
  quantity: number;
}
