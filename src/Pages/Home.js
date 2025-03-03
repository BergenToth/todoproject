import { TodoForm } from '../Components/TodoForm';
import { TodoList } from '../Components/TodoList';

function Home({ todos, addTodo, toggleTodo, deleteTodo }) {
  return (
    <div>
      <h1 className="header">Todo List</h1>
      <TodoForm addTodo={addTodo} />
      <TodoList todos={todos} toggleTodo={toggleTodo} deleteTodo={deleteTodo} />
    </div>
  );
}

export default Home;

