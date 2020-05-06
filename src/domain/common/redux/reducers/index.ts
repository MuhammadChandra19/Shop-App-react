import { Reducer, SingleReducer } from "@app/utils/redux/reducer";
import { CommonState } from "../states";
import { Dict } from "@app/utils/types";
import { SET_LOADING } from "../actions";

export class CommonReducer extends Reducer<CommonState> {
  constructor() {
    super({
      loading: {}
    })
  }

  public setLoading(state: CommonState, payload: any): CommonState {
    return {
      ...state,
      loading: {
        ...state.loading,
        [payload.key]: payload.value,
      },
    }
  }

  get actions(): Dict<SingleReducer<CommonState>> {
    return {
      [SET_LOADING]: this.setLoading,
    };
  }
}