import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import { useState } from 'react'
import Home from './Pages/Home'
import Contact from './Pages/Contact'
import Layout from './Pages/Layout'
import NoPage from './Pages/NoPage'

export default function App() {
  const [todos, setTodos] = useState([]);
  const [filter, setFilter] = useState('all');

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

  const filterTodos = todos.filter(todo => {
    if (filter === 'all') return true;
    if (filter === 'completed') return todo.completed;
    if (filter === 'active') return!todo.completed;
    return true;
  })
  
  return (
<Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route
            index
            element={
              <Home
                todos={filterTodos}
                addTodo={addTodo}
                toggleTodo={toggleTodo}
                deleteTodo={deleteTodo}
                setFilter={setFilter}
              />
            }
          />
          <Route path="contact" element={<Contact />} />
        </Route>
        <Route path="*" element={<NoPage />} />
      </Routes>
    </Router>
  );
}

