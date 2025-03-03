import { useState } from 'react'
export function TodoForm({ addTodo }) {
  const [newItem, setNewItem] = useState('');

  function handleSubmit(e) {
    e.preventDefault()
    if(newItem === '') return

    addTodo(newItem)

    setNewItem('');
  }

  return (      
  <form onSubmit={handleSubmit} className="new-item-form">
    <div className="from-row">
      <label htmlFor="item">New Item</label>
      <input value={newItem} onChange={e => setNewItem(e.target.value)} type="text" id="item" placeholder="Enter a new item" />
    </div>
    <button className="btn">Add Item</button>
  </form>
  )
}

