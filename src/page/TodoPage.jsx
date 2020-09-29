import React from "react";
import { Jumbotron } from "react-bootstrap";

import NewTodo from "../components/NewTodo";
import Todos from "../components/Todos";
import TodosFilter from "../components/TodosFilter";

export default function TodoPage() {
  return (
    <main style={{ margin: "auto", maxWidth: "600px", paddingTop: "20px" }}>
      <Jumbotron>
        <h1 className="text-center">Todo list</h1>
      </Jumbotron>
      <NewTodo />
      <TodosFilter />
      <Todos />
    </main>
  );
}
