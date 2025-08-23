import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import TodoList from "../components/TodoList";

describe("TodoList", () => {
  test("renders initial todos", () => {
    render(<TodoList />);
    const list = screen.getByRole("list", { name: /todo-list/i });
    // Two default items
    const items = screen.getAllByRole("listitem");
    expect(list).toBeInTheDocument();
    expect(items.length).toBe(2);
    expect(screen.getByRole("button", { name: /toggle-Learn React/i })).toBeInTheDocument();
    expect(screen.getByRole("button", { name: /toggle-Build a Todo App/i })).toBeInTheDocument();
  });

  test("adds a new todo", () => {
    render(<TodoList />);
    fireEvent.change(screen.getByRole("textbox", { name: /todo-input/i }), {
      target: { value: "New Task" },
    });
    fireEvent.click(screen.getByRole("button", { name: /add-todo-button/i }));

    expect(screen.getByRole("button", { name: /toggle-New Task/i })).toBeInTheDocument();
  });

  test("toggles a todo", () => {
    render(<TodoList />);
    const toggleBtn = screen.getByRole("button", { name: /toggle-Learn React/i });

    // Initially not completed
    expect(toggleBtn).toHaveStyle("text-decoration: none");

    fireEvent.click(toggleBtn);
    expect(toggleBtn).toHaveStyle("text-decoration: line-through");

    // Toggle back
    fireEvent.click(toggleBtn);
    expect(toggleBtn).toHaveStyle("text-decoration: none");
  });

  test("deletes a todo", () => {
    render(<TodoList />);
    const delBtn = screen.getByRole("button", { name: /delete-Learn React/i });
    fireEvent.click(delBtn);
    expect(screen.queryByRole("button", { name: /toggle-Learn React/i })).not.toBeInTheDocument();
  });
});
