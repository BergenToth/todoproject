import '../Components/TodoItem.css'
export function TodoItem({ completed, id, title, toggleTodo, deleteTodo }) {
  return (
    <li className={`todo-item ${completed ? 'completed' : ''}`}>
      <label className="todo-label">
        <input
          type="checkbox"
          checked={completed}
          onChange={e => toggleTodo(id, e.target.checked)}
        />
        <span className="todo-text">{title}</span>
      </label>
      <button onClick={() => deleteTodo(id)} className="delete-btn">
        ❌
      </button>
    </li>
  );
}

