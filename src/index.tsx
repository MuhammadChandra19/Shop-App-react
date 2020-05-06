import * as React from 'react';
import * as ReactDOM from 'react-dom';
import '@app/views/styles/index.scss'
import { Route, Switch, Router } from 'react-router-dom';
// import Home from './views/Pages/Home';
import Authorized from './views/Containers/Layouts/Authorized';
import { Provider } from 'react-redux';
import { AppStore, history } from './utils/redux/store';
import { MENU } from './constant/menu';
import Login from './views/Pages/Login';

ReactDOM.render(
  <Provider store={AppStore}>
    <Router history={history}>
      <Switch>
        <Route path={MENU.LOGIN} component={Login} />
        <Route path={MENU.HOME} component={Authorized} />
      </Switch>
    </Router>
  </Provider>,

  document.getElementById('root'));