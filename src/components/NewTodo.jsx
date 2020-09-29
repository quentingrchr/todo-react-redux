import React, { useState } from "react";
import { InputGroup, Button, FormControl, Form } from "react-bootstrap";
import { useDispatch } from "react-redux";

import { addTodo } from "../redux/actions/todosActions";

export default function NewTodo() {
  const [value, setValue] = useState("");
  const dispatch = useDispatch();

  function handleChange(e) {
    setValue(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    dispatch(addTodo(value));
    setValue("");
  }
  return (
    <Form onSubmit={handleSubmit} className="mb-5">
      <Form.Label className="lb-lg" size="lg">
        New todo
      </Form.Label>
      <InputGroup className="mb-3">
        <FormControl
          value={value}
          onChange={handleChange}
          placeholder={"What's do you need to do Today ?"}
          required
          aria-describedby="basic-addon1"
        />
        <InputGroup.Append>
          <Button type="submit" variant="outline-secondary">
            Add
          </Button>
        </InputGroup.Append>
      </InputGroup>
    </Form>
  );
}
