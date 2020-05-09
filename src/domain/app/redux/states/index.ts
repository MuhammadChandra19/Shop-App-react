import { ICategory, IProduct, ICart } from "../../interface";
import { Dict } from "@app/utils/types";

export interface ShopState {
  categoryList: Array<ICategory>
  productList: Dict<IProduct>
  initialLoading: boolean
  itemFound: Dict<IProduct>
  initSearch: boolean
  cart: Dict<ICart>
  purchaseHistory: Dict<IProduct>
}