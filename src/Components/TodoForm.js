import { useState } from 'react'
import '../Components/TodoForm.css'
export function TodoForm({ addTodo }) {
  const [newItem, setNewItem] = useState('');

  function handleSubmit(e) {
    e.preventDefault()
    if(newItem === '') return

    addTodo(newItem)

    setNewItem('');
  }

  return (  
  <div className="form-container">
  <form onSubmit={handleSubmit} className="new-item-form">
    <div className="form-row">
      <label htmlFor="item">New Item</label>
      <input value={newItem} onChange={e => setNewItem(e.target.value)} type="text" id="item" placeholder="Enter a new item" />
    </div>
    <button className="btn">Add Item</button>
  </form>
  </div>    
  )
}

