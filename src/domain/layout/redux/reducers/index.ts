import { Reducer, SingleReducer } from "@app/utils/redux/reducer"
import { LayoutState } from "../state";
import { ILayoutConfigProps } from "../../interfaces";
import { Dict } from "@app/utils/types";
import { SET_LAYOUT_STATE } from "../actions";

export class LayoutReducer extends Reducer<LayoutState> {
  constructor() {
    super({
      layoutConfig: {
        haveHeader: true,
        haveDefaultHeader: true,
        headerText: '',
        isBottomNavVisible: true
      }
    })
  }

  public setLayoutState(state: LayoutState, payload: ILayoutConfigProps): LayoutState {
    return {
      ...state,
      layoutConfig: {
        ...payload
      }
    }
  }

  get actions(): Dict<SingleReducer<LayoutState>> {
    return {
      [SET_LAYOUT_STATE]: this.setLayoutState
    }
  }
}