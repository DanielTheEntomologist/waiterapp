import { createStore, combineReducers } from "redux";
import initialState from "./initialState";

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

const store = createStore(
  reducer,
  initialState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
