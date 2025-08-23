import React, { useState } from "react";

const AddTodoForm = ({ addTodo }) => {
  const [value, setValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const trimmed = value.trim();
    if (!trimmed) return;
    addTodo(trimmed);
    setValue("");
  };

  return (
    <form onSubmit={handleSubmit} aria-label="add-todo-form">
      <input
        type="text"
        placeholder="Add a new todo"
        aria-label="todo-input"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <button type="submit" aria-label="add-todo-button">
        Add
      </button>
    </form>
  );
};

export default AddTodoForm;
