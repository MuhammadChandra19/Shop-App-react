import { BaseService } from "@app/domain/common/services/base.service";
import { LayoutConfigProps } from "../interfaces";
import { SET_LAYOUT_STATE } from "../redux/actions";

class LayoutService extends BaseService {

  public setLayoutConfig = (config: LayoutConfigProps) => {
    this.dispatch(SET_LAYOUT_STATE, config)
  }
}

const layoutService = new LayoutService();

export default layoutService;