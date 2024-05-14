//tableRedux.js

import { redirect } from "react-router-dom";
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
export const getTableById = (state, tableId) => {
  return state.tables.find((table) => table.id === tableId);
};

export const tableSelectors = { all: getAllTables, byId: getTableById };

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
export const fetchTables = () => {
  console.log("fetching tables");
  return (dispatch) => {
    fetch("http://localhost:3131/api/tables")
      .then((response) => response.json())
      .then((tables) => dispatch(updateTables(tables)));
  };
};
export const addTableRequest = (newTable) => {
  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(newTable),
  };
  return (dispatch) => {
    fetch("http://localhost:3131/api/tables", options).then(() =>
      dispatch(addTable(newTable))
    );
  };
};
export const updateTableRequest = (tableData) => {
  console.log("updating tables request with:", tableData);
  const options = {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(tableData),
  };
  return () => {
    fetch("http://localhost:3131/api/tables/" + tableData.id, options).then(
      () => fetchTables()
    );
  };
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
