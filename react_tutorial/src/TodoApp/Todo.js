import React from "react";
import { TodoProvider, useTodo } from "./context";
import { TodoForm, TodoItem } from "./components";

const Todo = () => {
  const { todos } = useTodo();

  return (
    <div style={{ padding: "60px 180px" }}>
      <TodoProvider>
        <TodoForm />
        {todos.map((todo) => {
          return (
            <div key={todo.id} style={{ border: "1px solid red" }}>
              <TodoItem todo={todo} />
            </div>
          );
        })}
      </TodoProvider>
    </div>
  );
};

export default Todo;
