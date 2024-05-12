import styles from "./Tables.module.scss";

import select from "../../redux/selectors";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Header from "../Header/Header";

const TableList = () => {
  const tables = useSelector(select.tables.all);

  return (
    <div>
      <Header>Waiter.app</Header>
      {tables.map((table) => (
        <div key={table.id}>
          table {table.id}: {table.description}
        </div>
      ))}
    </div>
  );
};

export default TableList;
