import * as React from "react";
import { Store } from "redux";

export default function createProvider<P>() {
  interface ProviderProps<P> {
    store: Store<any>,
    target: React.ComponentClass<P>
  }

  return class Provider extends React.Component<ProviderProps<P>, any> {
    constructor(props: ProviderProps<P>) {
      super(props)
    }

    static childContextTypes: Object = {
      store: React.PropTypes.object.isRequired
    }

    getChildContext(): Object {
      return { store: this.props.store };
    }

    render() {
      return React.createElement(this.props.target);
    }
  };
}