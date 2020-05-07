import { BaseService } from "@app/domain/common/services/base.service";
import { appApi } from "@app/api/appApi";
import { SET_INIT_HOME_LOADING, SET_CATEGORYLIST, SET_PRODUCT_LIST } from "../redux/actions";

class AppService extends BaseService {

  public setHomeItem = async () => {
    this.setLoading(SET_INIT_HOME_LOADING, true)
    const result = await appApi().getHomeItem()

    const { data: { category, productPromo } } = result[0]

    this.dispatch(SET_CATEGORYLIST, category);
    this.dispatch(SET_PRODUCT_LIST, productPromo)
    this.setLoading(SET_INIT_HOME_LOADING, false)
    // console.log(data[0].data)
  }
}

const appService = new AppService()
export default appService