import * as React from 'react';
import * as ReactDOM from 'react-dom';
import './scss/main.scss';

import { store } from './utilities/store';
import { Provider } from 'react-redux';

import App from './App';

ReactDOM.render(
    <Provider store={store} >
        <App text="New text"/>
    </Provider>,
    document.getElementById('root')
);