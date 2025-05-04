import { applyMiddleware, compose, createStore } from "redux";
import { counterReducer } from "./reducer";
import loggerMiddleware from "./loggerMiddleware";

const composeEnhancers =
typeof window === 'object' &&
window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
  // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
}) : compose;

const enhancer = composeEnhancers(
applyMiddleware(loggerMiddleware),
// other store enhancers if any
);


export const store = createStore(counterReducer , enhancer );