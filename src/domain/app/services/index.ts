import { BaseService } from "@app/domain/common/services/base.service";
import { appApi } from "@app/api/appApi";
import { SET_INIT_HOME_LOADING, SET_CATEGORYLIST, SET_PRODUCT_LIST, SET_FAVORITE_PRODUCT } from "../redux/actions";
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
}

const appService = new AppService()
export default appService