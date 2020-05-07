import { Reducer, SingleReducer } from "@app/utils/redux/reducer";
import { ShopState } from "../states";
import { ICategory, IProduct } from "../../interface";
import { SET_CATEGORYLIST, SET_PRODUCT_LIST, SET_FAVORITE_PRODUCT } from "../actions";
import { Dict } from "@app/utils/types";

export class ShopReducer extends Reducer<ShopState> {

  constructor() {
    super({
      categoryList: [],
      productList: {},
      initialLoading: true
    })
  }

  public setCategoryList(state: ShopState, categories: Array<ICategory>): ShopState {
    return {
      ...state,
      categoryList: categories,
      initialLoading: false
    }
  }

  public setProductList(state: ShopState, productList: Dict<IProduct>): ShopState {
    return {
      ...state,
      productList,
      initialLoading: false
    }
  }

  public setFavoriteProduct(state: ShopState, id: string): ShopState {
    let current: IProduct = state.productList[id]
    let increment = !current.isLoved
    return {
      ...state,
      productList: {
        ...state.productList,
        [id]: {
          ...current,
          isLoved: !current.isLoved,
          loved: increment ? current.loved + 1 : current.loved - 1
        }

      }
    }
  }

  get actions(): Dict<SingleReducer<ShopState>> {
    return {
      [SET_CATEGORYLIST]: this.setCategoryList,
      [SET_PRODUCT_LIST]: this.setProductList,
      [SET_FAVORITE_PRODUCT]: this.setFavoriteProduct
    }
  }
}