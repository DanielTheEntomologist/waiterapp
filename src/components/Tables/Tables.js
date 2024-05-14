import styles from "./Tables.module.scss";

import select from "../../redux/selectors";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

import Header from "../Header/Header";
import Table from "../Table/Table";

import ListGroup from "react-bootstrap/ListGroup";

const TableList = () => {
  const tables = useSelector(select.tables.all);

  let tablesListContent = <p>Default</p>;

  if (tables.length === 0) {
    tablesListContent = <p>Loading...</p>;
  }

  if (tables.length > 0) {
    tablesListContent = tables.map((table) => (
      <ListGroup.Item key={table.id}>
        <Table table={table} />
      </ListGroup.Item>
    ));
  }

  return (
    <div>
      <Header>Waiter.app</Header>
      <ListGroup>{tablesListContent}</ListGroup>
    </div>
  );
};

export default TableList;
