import React from "react";
import { ListGroup, Button, Row, Col, Form } from "react-bootstrap";

import { useDispatch } from "react-redux";
import { removeTodo, toggleDone } from "../redux/actions/todosActions";

export default function Todo({ done, content, id }) {
  const dispatch = useDispatch();

  function handleDone() {
    dispatch(toggleDone(id));
  }

  function handleDelete() {
    dispatch(removeTodo(id));
  }

  function renderContent() {
    return (
      <p
        style={{
          textDecorationLine: `${done ? "line-through" : "none"}`,
        }}
      >
        {content}
      </p>
    );
  }

  return (
    <li>
      <ListGroup.Item variant={`${done ? "dark" : ""}`}>
        <Row>
          <Col sm={8}>
            <Form.Check
              type="checkbox"
              id={id}
              checked={done}
              onChange={handleDone}
              label={renderContent()}
            />
          </Col>
          <Col sm={4}>
            <Button variant="danger" onClick={handleDelete}>
              Delete
            </Button>
          </Col>
        </Row>
      </ListGroup.Item>
    </li>
  );
}
