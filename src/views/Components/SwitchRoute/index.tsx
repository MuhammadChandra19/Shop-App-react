import { Switch } from 'react-router-dom';
import React, { PureComponent } from 'react';
import { hot } from 'react-hot-loader/root';
import { routeFactory } from '@app/utils/router/router.factory';

class SwitchRoute extends PureComponent<any, any> {
  render() {
    return <Switch>{routeFactory(this.props.routes)}</Switch>
  }
}

export default hot(SwitchRoute);