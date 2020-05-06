import { Reducer, SingleReducer } from "@app/utils/redux/reducer"
import { LayoutState } from "../state";
import { LayoutConfigProps } from "../../interfaces";
import { Dict } from "@app/utils/types";
import { SET_LAYOUT_STATE } from "../actions";

export class LayoutReducer extends Reducer<LayoutState> {
  constructor() {
    super({
      layoutConfig: {
        hasDefaultHeader: true,
        headerText: '',
        isBottomNavVisible: true
      }
    })
  }

  public setLayoutState(state: LayoutState, payload: LayoutConfigProps): LayoutState {
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