export default function TodoList() {
  return (
    <div className="todo-container">
      <h1>TCOD TODO LIST</h1>
      <div className="input-box">
        <input type="text" placeholder="Add a todo" />
        <button>Add</button>
      </div>
      <div className="todo-box">
        <ul>
          <li>
            First todo{" "}
            <div className="todo-options">
              <input type="checkbox" />
              <button>Delete</button>
            </div>
          </li>
          <li>
            Second todo{" "}
            <div className="todo-options">
              <input type="checkbox" />
              <button>Delete</button>
            </div>
          </li>
          <li>
            Third todo{" "}
            <div className="todo-options">
              <input type="checkbox" />
              <button>Delete</button>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}
