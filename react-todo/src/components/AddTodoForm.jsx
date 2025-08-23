import React, { useState } from "react";

const AddTodoForm = ({ addTodo }) => {
  const [value, setValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!value.trim()) return;
    addTodo(value);
    setValue("");
  };

  return (
    <form onSubmit={handleSubmit} data-testid="form">
      <input
        type="text"
        placeholder="Add a new todo"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        data-testid="input"
      />
      <button type="submit" data-testid="add-btn">Add</button>
    </form>
  );
};

export default AddTodoForm;
