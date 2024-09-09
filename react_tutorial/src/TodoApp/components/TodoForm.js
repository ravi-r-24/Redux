import React from "react";
import { useState } from "react";
import { useTodo } from "../context";

const TodoForm = () => {
  const [todo, setTodo] = useState("");
  const { addTodo } = useTodo();

  const add = (e) => {
    e.preventDefault();

    if (!todo) return;
    addTodo({ todo, completeStatus: false });
    setTodo("");
  };
  return (
    <>
      <form
        onSubmit={add}
        style={{ border: "2px solid white", display: "flex" }}
      >
        <input
          type="text"
          placeholder="Write Todo..."
          style={{
            width: "100%",
            border: "1px solid black",
            borderRadius: "8px",
            padding: "6px 12px 6px 12px",
            outlineStyle: "none",
            background: "white",
          }}
          value={todo}
          onChange={(e) => setTodo(e.target.value)}
        />

        <button
          type="submit"
          style={{
            borderRadius: "8px",
            padding: "6px 12px 6px 12px",
            background: "green",
            color: "white",
            cursor: "pointer",
            border: "none",
          }}
        >
          Add Todo
        </button>
      </form>

      {/* Add a button to toggle the theme */}

      {/* Add a button to delete all completed todos */}

      {/* Add a search functionality to filter todos */}

      {/* Add a button to clear all todos */}

      {/* Add a button to toggle the display of completed todos */}

      {/* Add a button to toggle the display of active todos */}

      {/* Add a button to toggle the display of all todos */}

      {/* Add a button to sort todos by due date */}

      {/* Add a button to sort todos by priority */}

      {/* Add a button to sort todos alphabetically */}

      {/* Add a button to toggle the display of only the current week's todos */}
    </>
  );
};

export default TodoForm;
