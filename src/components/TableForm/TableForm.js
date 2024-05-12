import styles from "./Table.module.scss";

import { Link } from "react-router-dom";

import Button from "react-bootstrap/Button";

import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

const TableForm = ({ table }) => {
  const { id, description } = table;
  return (
    <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <div className="h3 d-flex justify-content-center">
          Table {table.id}{" "}
        </div>
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
};

export default Table;
