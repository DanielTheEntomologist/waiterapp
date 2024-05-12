//tableRedux.js

import initialState from "./initialState";

// Actions
const ADD_TABLE = "ADD_TABLE";
const REMOVE_TABLE = "REMOVE_TABLE";
const UPDATE_TABLE = "UPDATE_TABLE";

// Selectors
export const getAllTables = (state) => state.tables;

// Action creators
export const addTable = (table) => ({
  type: ADD_TABLE,
  payload: table,
});
export const removeTable = (tableId) => ({
  type: REMOVE_TABLE,
  payload: tableId,
});
export const updateTable = (table) => ({
  type: UPDATE_TABLE,
  payload: table,
});

// reducers
export const tablesReducer = (tables = initialState.tables, action) => {
  switch (action.type) {
    case ADD_TABLE:
      return [...tables, action.payload];
    case REMOVE_TABLE:
      return tables.filter((table) => table.id !== action.payload);
    case UPDATE_TABLE:
      return tables.map((table) =>
        table.id === action.payload.id ? action.payload : table
      );
    default:
      return tables;
  }
};
