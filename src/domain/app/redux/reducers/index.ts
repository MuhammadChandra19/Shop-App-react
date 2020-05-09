import { Reducer, SingleReducer } from "@app/utils/redux/reducer";
import { ShopState } from "../states";
import { ICategory, IProduct } from "../../interface";
import { SET_CATEGORYLIST, SET_PRODUCT_LIST, SET_FAVORITE_PRODUCT, SET_FOUND_ITEM, SET_INIT_SEARCH, SET_ITEM_TO_CART } from "../actions";
import { Dict } from "@app/utils/types";

export class ShopReducer extends Reducer<ShopState> {

  constructor() {
    super({
      categoryList: [],
      productList: {},
      initialLoading: true,
      itemFound: {},
      initSearch: true,
      cart: {}
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
  public setFoundItem(state: ShopState, itemFound: Dict<IProduct>): ShopState {
    return {
      ...state,
      itemFound
    }
  }

  public setItemToCart(state: ShopState, product: IProduct): ShopState {
    const totalCurrent = state.cart[product.id]?.total
    return {
      ...state,
      cart: {
        ...state.cart,
        [product.id]: {
          ...product,
          total: totalCurrent ? totalCurrent + 1 : 1
        }
      }
    }
  }

  public setInitSearch(state: ShopState, initSearch: boolean): ShopState {
    return {
      ...state,
      initSearch
    }
  }

  get actions(): Dict<SingleReducer<ShopState>> {
    return {
      [SET_CATEGORYLIST]: this.setCategoryList,
      [SET_PRODUCT_LIST]: this.setProductList,
      [SET_FAVORITE_PRODUCT]: this.setFavoriteProduct,
      [SET_FOUND_ITEM]: this.setFoundItem,
      [SET_INIT_SEARCH]: this.setInitSearch,
      [SET_ITEM_TO_CART]: this.setItemToCart
    }
  }
}