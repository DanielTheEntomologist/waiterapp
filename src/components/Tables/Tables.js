import styles from "./Tables.module.scss";

import select from "../../redux/selectors";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

import Header from "../Header/Header";
import Table from "../Table/Table";

import ListGroup from "react-bootstrap/ListGroup";

const TableList = () => {
  const tables = useSelector(select.tables.all);

  return (
    <div>
      <Header>Waiter.app</Header>

      <ListGroup>
        {tables.map((table) => (
          <ListGroup.Item key={table.id}>
            <Table table={table} />
          </ListGroup.Item>
        ))}
      </ListGroup>
    </div>
  );
};

export default TableList;
