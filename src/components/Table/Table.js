import styles from "./Table.module.scss";

import { Link } from "react-router-dom";

import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";

const Table = ({ table }) => {
  const { id, description } = table;
  return (
    <Row className="">
      <Col xs={6} md={3} className="h3 d-flex justify-content-center">
        Table {table.id}
      </Col>

      <Col xs={6} md={6} className="d-flex justify-content-start">
        Status: {table.description}
      </Col>
      <Col xs={12} md={3} className="d-flex justify-content-end">
        <Button variant="primary">Go to table {table.id}</Button>
      </Col>
    </Row>
  );
};

export default Table;
