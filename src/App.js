import Header from "./components/Header/Header";
import Container from "react-bootstrap/Container";
import Navigation from "./components/Navigation/Navigation";

import { updateTables, getAllTables, fetchTables } from "./redux/tablesRedux";
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

  useEffect(() => {
    fetchTables(dispatch);
  }, [dispatch]);

  const allTables = useSelector((state) => getAllTables(state));

  return (
    <div>
      <Navigation />
      <Container>
        <Header>Waiter.app</Header>
        {
          /* <Tables /> */ allTables.map((table) => (
            <div key={table.id}>
              table {table.id}: {table.description}
            </div>
          ))
        }
      </Container>
    </div>
  );
};

export default App;
