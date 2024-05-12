import Header from "./components/Header/Header";
import Container from "react-bootstrap/Container";
import Navigation from "./components/Navigation/Navigation";

import { updateTables, getAllTables } from "./redux/tablesRedux";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";

const App = () => {
  console.log("App component is rendered");

  const dispatch = useDispatch();
  // const fetchTables = async () => {
  //   const response = await fetch("http://localhost:3000/api/tables");
  //   const tables = await response.json();
  //   dispatch(updateTables(tables));
  // };

  const fetchTables = () => {
    fetch("http://localhost:3131/api/tables")
      .then((response) => response.json())
      .then((tables) => dispatch(updateTables(tables)));
  };

  useEffect(() => {
    fetchTables();
  }, [dispatch]);

  const allTables = useSelector((state) => getAllTables(state));

  return (
    <div>
      <Navigation />
      <Container>
        <Header>Waiter.app</Header>
        {
          /* <Tables /> */ allTables.map((table) => (
            <div key={table.id}>table will go here{table.name}</div>
          ))
        }
      </Container>
    </div>
  );
};

export default App;
