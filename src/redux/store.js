import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import initialState from "./initialState";
import thunk from "redux-thunk";

import { tablesReducer } from "./tablesRedux";

// reducers
const reservationsReducer = (
  reservations = initialState.reservations,
  action
) => {
  return reservations;
};

// combine reducers
const subreducers = {
  tables: tablesReducer,
  reservations: reservationsReducer,
};

const reducer = combineReducers(subreducers);

const devtools =
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();

let wares = [applyMiddleware(thunk)];
if (process.env.NODE_ENV === "development") {
  wares.push(devtools);
}

const store = createStore(reducer, initialState, compose(...wares));

export default store;
