import Navigation from "./components/Navigation/Navigation";
import TableList from "./components/Tables/Tables";
import TableForm from "./components/TableForm/TableForm";

import Container from "react-bootstrap/Container";

import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";

import { fetchTables } from "./redux/tablesRedux";

const RedirectToHome = () => {
  const navigate = useNavigate();
  useEffect(() => {
    navigate("/");
  }, [navigate]);

  return null;
};

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchTables());
  }, [dispatch]);

  return (
    <div>
      <Navigation />
      <Container>
        <Routes>
          <Route path="/" element={<TableList />} />
          <Route path={"/table/:tableId"} element={<TableForm />}></Route>
          <Route path="*" element={<RedirectToHome />} />
        </Routes>
      </Container>
    </div>
  );
};

export default App;
