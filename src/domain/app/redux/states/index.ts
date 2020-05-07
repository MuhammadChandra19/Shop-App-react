import { ICategory, IProduct } from "../../interface";

export interface ShopState {
  categoryList: Array<ICategory>
  productList: Array<IProduct>
}