import { createStore, combineReducers } from "redux";
import initialState from "./initialState";

// import listsReducer from "./listsRedux";
// import columnsReducer from "./columnsRedux";
// import cardsReducer from "./cardsRedux";
// import searchTermReducer from "./searchTermRedux";

// //reducers
// const subreducers = {
//   lists: listsReducer,
//   columns: columnsReducer,
//   cards: cardsReducer,
//   searchTerm: searchTermReducer,
// };

// const reducer = combineReducers(subreducers);

const reducer = (state = initialState, action) => {
  return state;
};

const store = createStore(
  reducer,
  initialState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
