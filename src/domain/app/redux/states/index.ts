import { ICategory, IProduct } from "../../interface";
import { Dict } from "@app/utils/types";

export interface ShopState {
  categoryList: Array<ICategory>
  productList: Dict<IProduct>
  initialLoading: boolean
}