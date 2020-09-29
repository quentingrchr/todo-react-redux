import React from "react";

import { useDispatch, useSelector } from "react-redux";
import { changeFilter } from "../redux/actions/filterAction";
import { Form, Col } from "react-bootstrap";

export default function TodosFilter() {
  const dispatch = useDispatch();
  const todosEmpty = useSelector((state) => state.todos.length <= 0);

  function handleChange(e) {
    dispatch(changeFilter(e.target.value));
  }

  return (
    <Form.Row className="align-items-center mb-4">
      <Col sm={8} xs="auto" className="my-1">
        <Form.Label as={Col}>Filter by</Form.Label>
      </Col>
      <Col>
        <Form.Control
          disabled={todosEmpty}
          onChange={handleChange}
          size="sm"
          sm={2}
          as="select"
        >
          <option value="all">All</option>
          <option value="done">Done</option>
          <option value="undone">Undone</option>
        </Form.Control>
      </Col>
    </Form.Row>
  );
}
