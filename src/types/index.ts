export interface Product {
    category?: string;
    condition?: string;
    createdAt?: string;
    deletedAt?: null | string;
    description?: string;
    merchantId?: string;
    name?: string;
    photo?: string;
    stock?: number;
    supplier?: string;
    updatedAt?: string;
    __v?: number;
    _id?: string;
    priceSale? : number;
    count? : number;
  }


export interface UserData {
  about?: string;
  address?: string;
  balance?: number;
  cardId?: string;
  createdAt?: string;
  deletedAt?: string | null;
  email?: string;
  membership?: string;
  merchantId?: string;
  phone?: string;
  photo?: string;
  pin?: string;
  status?: string;
  updatedAt?: string;
  username?: string;
  __v?: number;
  _id?: string;
}