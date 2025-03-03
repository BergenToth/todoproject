import { TodoForm } from '../Components/TodoForm';
import { TodoList } from '../Components/TodoList';

export default function Home({ todos, addTodo, toggleTodo, deleteTodo, setFilter }) {
  return (
    <div>
      <h1 className="header">Todo List</h1>
      <TodoForm addTodo={addTodo} />

      <div className="filter-btn">
        <button onClick={() => setFilter('all')}>All</button>
        <button onClick={() => setFilter('completed')}>Completed</button>
        <button onClick={() => setFilter('active')}>Active</button>
      </div>

      <TodoList todos={todos} toggleTodo={toggleTodo} deleteTodo={deleteTodo} />
    </div>
  );
}



