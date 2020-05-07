import { Reducer, SingleReducer } from "@app/utils/redux/reducer";
import { ShopState } from "../states";
import { ICategory, IProduct } from "../../interface";
import { SET_CATEGORYLIST, SET_PRODUCT_LIST } from "../actions";
import { Dict } from "@app/utils/types";

export class ShopReducer extends Reducer<ShopState> {

  constructor() {
    super({
      categoryList: [],
      productList: []
    })
  }

  public setCategoryList(state: ShopState, categories: Array<ICategory>): ShopState {
    return {
      ...state,
      categoryList: categories
    }
  }

  public setProductList(state: ShopState, productList: Array<IProduct>): ShopState {
    return {
      ...state,
      productList
    }
  }

  get actions(): Dict<SingleReducer<ShopState>> {
    return {
      [SET_CATEGORYLIST]: this.setCategoryList,
      [SET_PRODUCT_LIST]: this.setProductList
    }
  }
}