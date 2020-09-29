import React from "react";

import { useSelector } from "react-redux";
import Todo from "./Todo";

export default function Todos() {
  const filter = useSelector((state) => state.filter);
  const todosFiltered = useSelector((state) =>
    state.todos.filter((todo) => {
      return filter !== null ? todo.done === filter : todo;
    })
  );

  return (
    <ul>
      {todosFiltered.length > 0 ? (
        todosFiltered.map((todo) => {
          return (
            <Todo
              key={todo.id}
              done={todo.done}
              content={todo.content}
              id={todo.id}
            />
          );
        })
      ) : (
        <h2>No todos</h2>
      )}
    </ul>
  );
}
