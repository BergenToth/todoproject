import { TodoForm } from '../Components/TodoForm';
import { TodoList } from '../Components/TodoList';
import { Filter } from '../Components/Filter';

export default function Home({ todos, addTodo, toggleTodo, deleteTodo, setFilter }) {
  return (
    <div>
      <h1 className="header">Todo List</h1>
      <TodoForm addTodo={addTodo} />
      
      <Filter setFilter={setFilter} />

      <TodoList todos={todos} toggleTodo={toggleTodo} deleteTodo={deleteTodo} />
    </div>
  );
}




