import { BaseService } from "@app/domain/common/services/base.service";
import { appApi } from "@app/api/appApi";
import { SET_INIT_HOME_LOADING, SET_CATEGORYLIST, SET_PRODUCT_LIST, SET_FAVORITE_PRODUCT, SET_FOUND_ITEM, SET_INIT_SEARCH, SET_ITEM_TO_CART, SET_PURCHASED_ITEM } from "../redux/actions";
import { Dict } from "@app/utils/types";
import { IProduct } from "../interface";

class AppService extends BaseService {

  public setHomeItem = async () => {
    const isInitial = this.getState().shop.initialLoading
    if (isInitial) {
      this.setLoading(SET_INIT_HOME_LOADING, true)
      const result = await appApi().getHomeItem()

      const { data: { category, productPromo } } = result[0]
      let productMap: Dict<IProduct> = {}
      productPromo.forEach((product: IProduct) => {
        productMap[product.id] = {
          ...product,
          isLoved: false
        }
      })
      this.dispatch(SET_CATEGORYLIST, category);
      this.dispatch(SET_PRODUCT_LIST, productMap)
      this.setLoading(SET_INIT_HOME_LOADING, false)
    }

    // console.log(data[0].data)
  }

  public setFavorite = (id: string) => {
    this.dispatch(SET_FAVORITE_PRODUCT, id)
  }

  public searchItem = (keyword: string) => {
    this.dispatch(SET_INIT_SEARCH, false)
    if (keyword.replace(/\s/g, "").length > 0) {
      let productMap: Dict<IProduct> = {}
      const { shop: { productList } } = this.getState()
      Object.keys(productList).forEach((id) => {
        const currentProduct = productList[id]
        var n = currentProduct.title.toLowerCase().search(keyword.toLowerCase())
        if (n > -1) {
          productMap[id] = currentProduct
        }
      })
      this.dispatch(SET_FOUND_ITEM, productMap)
    } else {
      this.dispatch(SET_FOUND_ITEM, {})
      this.dispatch(SET_INIT_SEARCH, true)
    }


  }

  public addToCart = (product: IProduct) => {
    this.dispatch(SET_ITEM_TO_CART, product)
  }

  public purchaseItem = (product: IProduct) => {
    let id = Math.random().toString(36).substring(4);

    this.dispatch(SET_PURCHASED_ITEM, { purchasedId: id, ...product })
  }
}

const appService = new AppService()
export default appService