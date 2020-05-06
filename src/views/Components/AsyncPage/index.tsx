import React, { Component } from 'react';
import { Spin } from '../Spin';

export default function AsyncPage(pageComponent: any) {
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

      if (this.mounted) {
        setTimeout(() => {
          this.setState({
            component: <Component {...this.props} />,
          });
        }, 500);
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