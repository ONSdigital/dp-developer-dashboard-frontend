import { Store, createStore } from "redux";
import reducer from './reducer';

declare const window:any // tslint:disable-line

export const store:Store<{}> = createStore(
    reducer, 
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() // tslint:disable-line
);