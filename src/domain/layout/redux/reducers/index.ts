import { Reducer, SingleReducer } from "@app/utils/redux/reducer"
import { LayoutState } from "../state";
import { ILayoutConfigProps } from "../../interfaces";
import { Dict } from "@app/utils/types";
import { SET_LAYOUT_STATE, SET_CURRENT_PAGE } from "../actions";

export class LayoutReducer extends Reducer<LayoutState> {
  constructor() {
    super({
      layoutConfig: {
        textHeader: '',
        haveDefaultHeader: true,
        headerText: '',
        isBottomNavVisible: true
      },
      curretPage: ''
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

  public setCurrentPage(state: LayoutState, curretPage: string): LayoutState {
    return {
      ...state,
      curretPage
    }
  }

  get actions(): Dict<SingleReducer<LayoutState>> {
    return {
      [SET_LAYOUT_STATE]: this.setLayoutState,
      [SET_CURRENT_PAGE]: this.setCurrentPage
    }
  }
}