import { createStore, combineReducers } from "redux";
import initialState from "./initialState";

// import listsReducer from "./listsRedux";
// import columnsReducer from "./columnsRedux";
// import cardsReducer from "./cardsRedux";
// import searchTermReducer from "./searchTermRedux";

const tablesReducer = (tables = initialState.tables, action) => {
  return tables;
};

const reservationsReducer = (
  reservations = initialState.reservations,
  action
) => {
  return reservations;
};

// //reducers
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
