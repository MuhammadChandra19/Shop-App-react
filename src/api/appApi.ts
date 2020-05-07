import { ICommonResponse } from "@app/domain/common/interfaces"
import { IAppItem } from "@app/domain/app/interface"
import { APP_CONFIG } from "@app/constant/app.config"
import { baseApi } from "./base.api"

export const appApi = () => {

  const { makeRequest } = baseApi()
  const { API_URL } = APP_CONFIG

  const getHomeItem = async function (): Promise<Array<ICommonResponse<IAppItem>>> {
    return makeRequest(`${API_URL}/home`)
  }

  return {
    getHomeItem
  }
}