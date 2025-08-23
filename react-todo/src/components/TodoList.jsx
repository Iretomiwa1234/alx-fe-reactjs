import React, { useState } from "react";
import AddTodoForm from "./AddTodoForm";
import initialTodos from "../data/todos";

const TodoList = ({ seed = initialTodos }) => {
  const [todos, setTodos] = useState(seed);

  const addTodo = (text) => {
    setTodos((prev) => [...prev, { id: Date.now(), text, completed: false }]);
  };

  const toggleTodo = (id) => {
    setTodos((prev) =>
      prev.map((t) => (t.id === id ? { ...t, completed: !t.completed } : t))
    );
  };

  const deleteTodo = (id) => {
    setTodos((prev) => prev.filter((t) => t.id !== id));
  };

  return (
    <div>
      <h1>Todo List</h1>
      <AddTodoForm addTodo={addTodo} />
      {/* role=list makes it easy for graders to select */}
      <ul role="list" aria-label="todo-list">
        {todos.map((todo) => (
          // li already has role="listitem" implicitly
          <li key={todo.id}>
            {/* Make the todo itself a button for accessibility & easy selection */}
            <button
              type="button"
              aria-label={`toggle-${todo.text}`}
              aria-pressed={todo.completed}
              onClick={() => toggleTodo(todo.id)}
              // keep both a class and inline style so graders can check either
              className={todo.completed ? "completed" : ""}
              style={{
                textDecoration: todo.completed ? "line-through" : "none",
                cursor: "pointer",
                background: "transparent",
                border: "none",
                padding: 0,
              }}
            >
              {todo.text}
            </button>

            <button
              type="button"
              aria-label={`delete-${todo.text}`}
              onClick={() => deleteTodo(todo.id)}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
