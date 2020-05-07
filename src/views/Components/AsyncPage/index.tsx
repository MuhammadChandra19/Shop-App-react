import React, { Component } from 'react';
import { Spin } from '../Spin';
import { MiddlewareFunction } from '@app/utils/router/route.item';
import { history } from '@app/utils/redux/store';

export default function AsyncPage(pageComponent: any, middlewares: Array<MiddlewareFunction> = []) {
  class AsyncFunc extends Component<any, any> {
    private mounted: boolean;
    constructor(props: any) {
      super(props);
      this.state = {
        component: null,
      };
    }

    componentWillUnmount() {
      this.mounted = false;
    }

    UNSAFE_componentWillUnmount() {
      this.mounted = false;
    }


    async componentDidMount() {
      this.mounted = true;
      const { default: Component } = await pageComponent()
      const middlewareResults = await Promise.all(
        middlewares.map(
          (middleware) =>
            new Promise(async (resolve) => {
              resolve(await middleware())
            })
        )
      )

      middlewareResults.forEach((fallback) => {
        if (fallback !== true && typeof fallback === "string") {
          history.replace(fallback)
        }
      })

      if (this.mounted) {
        setTimeout(() => {
          this.setState({
            component: <Component {...this.props} />,
          });
        }, 100);
      }
    }

    render() {
      return (
        this.state.component || (
          <Spin />
        )
      )
    }
  }

  return AsyncFunc;
}