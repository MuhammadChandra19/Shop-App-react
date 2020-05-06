import { Store } from "redux";
import { AppStore, AppState } from "@app/utils/redux/store";
import { SET_LOADING } from "../redux/actions";

export class BaseService {
  private store: Store;

  constructor() {
    this.store = AppStore;
  }

  protected setLoading(action: string, loading: boolean): void {
    this.dispatch(SET_LOADING, {
      key: action,
      value: loading
    })
  }

  protected getState(): Readonly<AppState> {
    return this.store.getState();
  }

  protected dispatch(type: string, payload: any): void {
    this.store.dispatch({ type, payload })
  }
}