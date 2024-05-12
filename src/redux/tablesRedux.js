//tableRedux.js

import initialState from "./initialState";

// Actions
const ADD_TABLE = "ADD_TABLE";
const REMOVE_TABLE = "REMOVE_TABLE";
const UPDATE_TABLE = "UPDATE_TABLE";
const UPDATE_TABLES = "UPDATE_TABLES";

// Selectors
export const getAllTables = (state) => {
  return state.tables;
};

// Action creators
export const addTable = (table) => ({
  type: ADD_TABLE,
  payload: table,
});
export const removeTable = (tableId) => ({
  type: REMOVE_TABLE,
  payload: tableId,
});
export const updateTables = (tables) => ({
  type: UPDATE_TABLES,
  payload: tables,
});
export const fetchTables = (dispatch) => {
  fetch("http://localhost:3131/api/tables")
    .then((response) => response.json())
    .then((tables) => dispatch(updateTables(tables)));
};

// reducers
export const tablesReducer = (tables = initialState.tables, action) => {
  switch (action.type) {
    case ADD_TABLE:
      return [...tables, action.payload];
    case REMOVE_TABLE:
      return tables.filter((table) => table.id !== action.payload);
    case UPDATE_TABLES:
      return [...action.payload];
    default:
      return tables;
  }
};
