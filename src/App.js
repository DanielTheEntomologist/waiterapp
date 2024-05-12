import Navigation from "./components/Navigation/Navigation";
import TableList from "./components/Tables/Tables";

import Container from "react-bootstrap/Container";

import { useDispatch } from "react-redux";
import { useEffect } from "react";

import { fetchTables } from "./redux/tablesRedux";

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchTables());
  }, [dispatch]);

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
