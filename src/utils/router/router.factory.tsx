import React from 'react';
import { Route } from "react-router-dom";
import { RouteItem } from './route.item';
import AsyncPage from '../../views/Components/AsyncPage';

export function routeFactory(routeObj: Array<RouteItem>) {
  return routeObj.map((value: RouteItem, index: number) => {
    return (
      <Route
        key={index}
        exact
        component={AsyncPage(
          () => import('@app/' + value.component),
          value.middleware
        )}
        path={value.url}
      />
    )
  })
}