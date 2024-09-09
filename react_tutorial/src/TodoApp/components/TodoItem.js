import React, { useState } from "react";
import { useTodo } from "../context";

const TodoItem = ({ todo }) => {
  const [isTodoEditable, setIsTodoEditable] = useState(false);

  const [todoMessage, setTodoMessage] = useState(todo.todo);

  const { updateTodo, deleteTodo, completeStatusToggle } = useTodo();

  const editTodo = () => {
    updateTodo(todo.id, { ...todo, todo: todoMessage });
    setIsTodoEditable(false);
  };

  const completedStatusToggle = () => {
    completeStatusToggle(todo.id);
  };

  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "6px 12px",
          border: "1px solid",
          borderRadius: "8px",
          cursor: "pointer",
          color: "black",
          backgroundColor: todo.completeStatus ? "#c6e9a7" : "#ccbed7",
        }}
      >
        <input
          type="checkbox"
          style={{ cursor: "pointer" }}
          checked={todo.completeStatus}
          onChange={completedStatusToggle}
        />

        <input
          type="text"
          style={{
            border: "1px solid",
            outlineType: "none",
            width: "100%",
            background: "transparent",
            borderRadius: "8px",
            borderColor: isTodoEditable ? "black" : "transparent",
          }}
          value={todoMessage}
          readOnly={!isTodoEditable}
          onChange={(e) => setTodoMessage(e.target.value)}
        />

        <button
          style={{
            display: "inline-flex",
            width: "32px",
            height: "32px",
            borderRadius: "8px",
            justifyContent: "center",
            alignItems: "center",
            cursor: "pointer",
            backgroundColor: "transparent",
            border: "none",
            fontSize: "12px",
          }}
          onClick={() => {
            if (todo.completeStatus) return;
            if (isTodoEditable) {
              editTodo();
            } else setIsTodoEditable((prev) => !prev);
          }}
          disabled={todo.completeStatus}
        >
          {isTodoEditable ? "save" : "edit"}
        </button>

        <button
          style={{
            display: "inline-flex",
            width: "32px",
            height: "32px",
            border: "1px solid black",
            justifyContent: "center",
            backgroundColor: "black",
            color: "white",
          }}
          onClick={() => deleteTodo(todo.id)}
        >
          "Delete"
        </button>
      </div>
    </>
  );
};

export default TodoItem;
