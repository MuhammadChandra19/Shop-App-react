export interface ICategory {
  imageUrl: string;
  id: number;
  name: string;
}

export interface IProduct {
  id: string,
  imageUrl: string;
  title: string;
  description: string;
  price: string;
  loved: number;
  isLoved?: boolean;
}

export interface ICart extends IProduct {
  total: number
}

export interface IPurchasedHistory extends IProduct {
  purchasedId: string
}

export interface IAppItem {
  category: Array<ICategory>
  productPromo: Array<IProduct>
}