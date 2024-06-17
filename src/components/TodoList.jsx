import { useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodo, deleteTodo, toggleTodo } from "../redux/todoSlice";

export default function TodoList() {
  const [newTodo, setNewTodo] = useState("");
  const inputRef = useRef(null);
  const dispatch = useDispatch();

  const allTodos = useSelector((state) => state.todos.todos);

  const addTodoHandler = () => {
    if (newTodo.trim() !== "") {
      dispatch(
        addTodo({ id: allTodos.length + 1, title: newTodo, isCompleted: false })
      );
      setNewTodo("");
      inputRef.current.focus();
    }
  };

  const handleToggleTodo = (todoID) => {
    dispatch(toggleTodo(todoID));
  };

  const handleDelete = (todoID) => {
    dispatch(deleteTodo(todoID));
  };

  return (
    <div className="todo-container">
      <h1>TCOD TODO LIST</h1>
      <div className="input-box">
        <input
          type="text"
          placeholder="Add a todo"
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
          ref={inputRef}
        />
        <button onClick={addTodoHandler}>Add</button>
      </div>
      <div className="todo-box">
        <ul>
          {allTodos.map((todo) => (
            <li key={todo.id}>
              <span
                style={{
                  textDecoration: todo.isCompleted ? "line-through" : "none",
                }}
              >
                {todo.title}
              </span>
              <div className="todo-options">
                <input
                  type="checkbox"
                  checked={todo.isCompleted}
                  onChange={() => handleToggleTodo(todo.id)}
                />
                <button onClick={() => handleDelete(todo.id)}>Delete</button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
