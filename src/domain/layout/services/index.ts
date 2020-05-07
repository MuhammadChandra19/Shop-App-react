import { BaseService } from "@app/domain/common/services/base.service";
import { SET_LAYOUT_STATE, SET_CURRENT_PAGE } from "../redux/actions";
import { PAGES } from "@app/routes";
import { RouteItem } from "@app/utils/router/route.item";
import { history } from "@app/utils/redux/store";

class LayoutService extends BaseService {

  public setLayoutConfig = (url: string = null) => {

    let pathname = history.location.pathname.split("/")[1]
    let current = url ? url : pathname === "" ? "home" : pathname
    PAGES.forEach((page: RouteItem) => {


      if (page.key === current) {
        this.dispatch(SET_LAYOUT_STATE, page.layoutConfig)
        this.dispatch(SET_CURRENT_PAGE, current)

      }
    })

  }
}

const layoutService = new LayoutService();

export default layoutService;