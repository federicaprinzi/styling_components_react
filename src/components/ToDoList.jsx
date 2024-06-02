import { useState } from "react";

export function TodoList() {
  const [todos, setTodos] = useState([]);

  function handleAddTodo(event) {
    event.preventDefault();

    const todo = event.target.elements.todo.value;

    setTodos((todos) => [...todos, todo]);

    event.target.elements.todo.value = "";
  }

  function handleResetTodos() {
    setTodos([]);
  }

  function handleRemoveTodo(indexToRemove) {
    setTodos((todos) => todos.filter((todo, index) => index !== indexToRemove));
  }

  return (
    <div>
      <form onSubmit={handleAddTodo}>
        <input
          data-testid="todo-input"
          name="todo"
          placeholder="Scrivi la tua lista"
        />
        <button type="submit">Aggiungi</button>
      </form>
      <button onClick={handleResetTodos}>Resetta</button>

      <ul data-testid="todo-list">
        {todos.map((todo, index) => (
          <li key={index}>
            {todo}
            <button
              onClick={() => handleRemoveTodo(index)}
              className="remove-b"
            >
              Rimuovi
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
