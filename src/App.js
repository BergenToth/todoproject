import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import { useState } from 'react'
import { TodoForm } from './Components/TodoForm'
import { TodoList } from './Components/TodoList'
import Home from './Pages/Home'
import Contact from './Pages/Contact'

export default function App() {
  const [todos, setTodos] = useState([])

  function addTodo(title) {
    setTodos(currentTodos => {
      return [...currentTodos, 
        { id: crypto.randomUUID(),
          title,
          completed: false}
      ]
    })
  }

  function toggleTodo(id, completed) {
    setTodos(currentTodos =>
      currentTodos.map(todo =>
        todo.id === id ? { ...todo, completed } : todo
      )
    );
  }

  function deleteTodo(id) {
    setTodos(currentTodos => {
      return currentTodos.filter(todo => todo.id !== id)
    })
  }
  
  return (
    <Router>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/contact">Contact</Link>
      </nav>

      <Routes>
        <Route path="/" element={
          <Home todos={todos} addTodo={addTodo} toggleTodo={toggleTodo} deleteTodo={deleteTodo} />
        } />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}
