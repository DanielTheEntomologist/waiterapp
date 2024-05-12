import Header from "./components/Header/Header";
import Container from "react-bootstrap/Container";
import Navigation from "./components/Navigation/Navigation";
import TableList from "./components/Tables/Tables";

import {
  updateTables,
  getAllTables,
  fetchTables,
  addTable,
  addTableRequest,
} from "./redux/tablesRedux";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";

const App = () => {
  console.log("App component is rendered");

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchTables());
  }, [dispatch]);

  const allTables = useSelector((state) => getAllTables(state));

  return (
    <div>
      <Navigation />
      <Container>
        <TableList />
      </Container>
    </div>
  );
};

export default App;
