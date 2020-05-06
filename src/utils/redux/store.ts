import {
  applyMiddleware,
  combineReducers,
  createStore,
  Middleware,
  ReducersMapObject,

  Store,
} from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { CommonState } from '@app/domain/common/redux/states';
import { CommonReducer } from '@app/domain/common/redux/reducers';
import { createBrowserHistory, History } from 'history';
import { LayoutState } from '@app/domain/layout/redux/state';
import { LayoutReducer } from '@app/domain/layout/redux/reducers';

export interface AppState {
  common: CommonState;
  layout: LayoutState;
}

const logger: Middleware = () => (next) => (action) => {
  if (process.env.NODE_ENV !== 'production') {
    console.log(action);
  }
  return next(action);
};

export function configureStore(): Store<AppState> {
  let middleware = applyMiddleware(logger);

  if (process.env.NODE_ENV !== 'production') {
    middleware = composeWithDevTools(middleware);
  }

  let rootReducer: ReducersMapObject<AppState, any> = {
    common: new CommonReducer().build(),
    layout: new LayoutReducer().build(),
  }

  return createStore(
    combineReducers<AppState>(rootReducer),
    middleware
  )
}

export const history: History = createBrowserHistory({ basename: '/' });

export const AppStore = configureStore();