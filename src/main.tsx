import * as React from 'react';
import * as ReactDOM from 'react-dom';
import './scss/main.scss';

import { store } from './utilities/store';
import createProvider from "./utilities/provider/createProvider";
import App, { AppProps } from './App';

const Provider: any = createProvider<AppProps>();

ReactDOM.render(
    <Provider store={store} target={App} />,
    document.getElementById('root')
);