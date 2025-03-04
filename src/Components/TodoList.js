import { TodoItem } from './TodoItem';
import '../Components/TodoList.css'

export function TodoList({ todos, toggleTodo, deleteTodo }) {
  return (
    <ul className="todo-list">
      {todos.length === 0 && <p>No items to display</p>}
      {todos.map((todo) => (
        <TodoItem 
          key={todo.id} 
          {...todo} 
          toggleTodo={toggleTodo} 
          deleteTodo={deleteTodo} 
        />
      ))}
    </ul>
  )
}

