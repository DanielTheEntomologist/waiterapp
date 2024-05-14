import styles from "./TableForm.module.scss";

import { useParams } from "react-router-dom";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import select from "../../redux/selectors";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";

import { updateTableRequest } from "../../redux/tablesRedux";

import { RedirectToHome } from "../../App";

const TableForm = () => {
  const { tableId } = useParams();
  const id = tableId;

  let thisTable = useSelector((state) => select.tables.byId(state, tableId));
  const tables = useSelector(select.tables.all);
  const tableIds = tables.map((table) => table.id);

  const [status, setStatus] = useState(undefined);
  const [people, setPeople] = useState(undefined);
  const [peopleMax, setPeopleMax] = useState(undefined);
  const [bill, setBill] = useState(undefined);

  const validatePeopleMax = (value) => {
    const newValue = parseInt(value);
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

  if (
    (status === "free" || status === "cleaning" || status === "reserved") &&
    (bill !== 0 || people !== 0)
  ) {
    setPeople(0);
    setBill(0);
  }

  // if (!tableIds.includes(id)) {
  //   return <RedirectToHome />;
  // }

  // const updateTable = (tableData) => {
  //   console.log(tableData);
  //   const options = {
  //     method: "PATCH",
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //     body: JSON.stringify(tableData),
  //   };
  //   fetch("http://localhost:3131/tables/" + tableData.id, options).then(
  //     (response) => {
  //       console.log(response);
  //     }
  //   );
  // };
  const dispatch = useDispatch();

  if (thisTable === undefined) {
    return <RedirectToHome />;
  }

  if (tables.length === 0) {
    return <p>Loading Table...</p>;
  } else if (status === undefined) {
    setStatus(thisTable.status);
    setBill(thisTable.bill);
    setPeople(thisTable.people);
    setPeopleMax(thisTable.peopleMax);
  }

  return (
    <Form
      onSubmit={(e) => {
        e.preventDefault();
      }}
    >
      <div className="h3 d-flex justify-content-start p-3">Table {id} </div>
      <div>{thisTable.description}</div>
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

      <Button
        variant="primary"
        type="button"
        onClick={(e) => {
          e.preventDefault();
          dispatch(
            updateTableRequest({
              id: thisTable.id,
              status: status,
              people: people,
              peopleMax: peopleMax,
              bill: bill,
            })
          );
        }}
      >
        Submit
      </Button>
    </Form>
  );
};

export default TableForm;
