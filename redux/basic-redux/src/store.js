import { compose, createStore } from "redux";
import { counterReducer } from "./reducer";


const devtools = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(counterReducer,devtools());