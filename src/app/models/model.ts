export interface Product {
  id: number;
  name: string;
  price: number;
  url: string;
  description: string;
  quantity: number
}

export type cartitem = Omit<Product, 'url'| 'description'>

export interface addItem {
  id: number;
  name: string;
  price: number;
  quantity?: number
}

export interface Cart {
  products: cartitem[],
  total: number
}