import { Action } from '@app/utils/redux/action'

export function reducerGenerators(initialState: any, reducer: any) {
  return (state = initialState, action: Action) => {
    return reducer[action.type] ? reducer[action.type](state, action.payload) : state;
  }
}