import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import TodoList from "../components/TodoList";

describe("TodoList Component", () => {
  test("renders initial todos", () => {
    render(<TodoList />);
    const todos = screen.getAllByTestId("todo-item");
    expect(todos.length).toBe(2);
    expect(screen.getByText("Learn React")).toBeInTheDocument();
    expect(screen.getByText("Build a Todo App")).toBeInTheDocument();
  });

  test("adds a new todo", () => {
    render(<TodoList />);
    fireEvent.change(screen.getByTestId("input"), {
      target: { value: "New Task" },
    });
    fireEvent.click(screen.getByTestId("add-btn"));
    expect(screen.getByText("New Task")).toBeInTheDocument();
  });

  test("toggles a todo", () => {
    render(<TodoList />);
    const todoItem = screen.getByText("Learn React");
    expect(todoItem).toHaveStyle("text-decoration: none");
    fireEvent.click(todoItem);
    expect(todoItem).toHaveStyle("text-decoration: line-through");
  });

  test("deletes a todo", () => {
    render(<TodoList />);
    const deleteButtons = screen.getAllByTestId("delete-btn");
    fireEvent.click(deleteButtons[0]); // delete first todo
    expect(screen.queryByText("Learn React")).not.toBeInTheDocument();
  });
});
