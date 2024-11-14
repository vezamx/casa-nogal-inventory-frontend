export interface TProduct {
  id: string;
  nombre: string;
  costo: number;
  descripcion?: string;
  insumos: {
    cantidad: number;
    insumo: TInsumo;
  }[];
}

export interface TInsumo {
  id: string;
  nombre: string;
  unidad: string;
  cantidad: number;
  descripcion?: string;
}
