import styles from "./TableForm.module.scss";

import { useParams } from "react-router-dom";
import { useState } from "react";
import { useSelector } from "react-redux";

import select from "../../redux/selectors";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import { RedirectToHome } from "../../App";

const TableForm = () => {
  // const { id, description } = table;
  const { tableId } = useParams();
  const id = tableId;

  const tables = useSelector(select.tables.all);
  const tableIds = Object.keys(tables);

  const [status, setStatus] = useState("free");
  const [people, setPeople] = useState(0);
  const [peopleMax, setPeopleMax] = useState(10);
  const [bill, setBill] = useState(0);

  const validatePeopleMax = (value) => {
    const newValue = parseInt(value);
    console.log("newValue", newValue);
    if (isNaN(newValue)) {
      return setPeopleMax(0);
    } else if (newValue < 0) {
      return setPeopleMax(0);
    } else if (newValue > 10) {
      return setPeopleMax(10);
    } else {
      return setPeopleMax(newValue);
    }
  };
  const validatePeople = (value) => {
    const newValue = parseInt(value);
    console.log("newValue", newValue);
    if (isNaN(newValue)) {
      return setPeople(0);
    } else if (newValue < 0) {
      return setPeople(0);
    } else if (newValue > peopleMax) {
      return setPeople(peopleMax);
    } else {
      return setPeople(newValue);
    }
  };
  const validateBill = (value) => {
    const newValue = Number(value);
    console.log("newValue", newValue);
    if (isNaN(newValue)) {
      return setBill(0);
    } else if (newValue < 0) {
      return setBill(0);
    } else {
      return setBill(newValue);
    }
  };

  let billInput = null;
  if (status === "busy") {
    billInput = (
      <InputGroup className="mb-3">
        <InputGroup.Text className="">Bill: $</InputGroup.Text>
        <Form.Control
          type="number"
          placeholder="0.00"
          value={bill}
          onChange={(e) => {
            e.preventDefault();
            validateBill(e.target.value);
          }}
        />
      </InputGroup>
    );
  }

  if (!tableIds.includes(id)) {
    return <RedirectToHome />;
  }

  return (
    <Form
      onSubmit={(e) => {
        e.preventDefault();
      }}
    >
      <div className="h3 d-flex justify-content-start p-3">Table {id} </div>
      <Form.Group className="mb-3">
        <InputGroup>
          <InputGroup.Text className="">Status</InputGroup.Text>
          <Form.Select
            aria-label="Table status select"
            defaultValue={status}
            onChange={(e) => {
              e.preventDefault();
              setStatus(e.target.value);
            }}
          >
            <option value="free">Free</option>
            <option value="reserved">Reserved</option>
            <option value="busy">Busy</option>
            <option value="cleaning">Cleaning</option>
          </Form.Select>
        </InputGroup>
      </Form.Group>
      <InputGroup className="mb-3">
        <InputGroup.Text className="">People</InputGroup.Text>
        <Form.Control
          type="number"
          value={people}
          onChange={(e) => {
            e.preventDefault();
            validatePeople(e.target.value);
          }}
        />
        <Form.Control
          type="number"
          value={peopleMax}
          onChange={(e) => {
            e.preventDefault();
            validatePeopleMax(e.target.value);
          }}
        />
      </InputGroup>

      {billInput}
      <Form.Group className="mb-3">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
};

export default TableForm;
