import '../Components/Filter.css'
export function Filter({ setFilter }) {
  return (
    <div className="filter-container">
      <button className="btn" onClick={() => setFilter('all')}>All</button>
      <button className="btn" onClick={() => setFilter('completed')}>Completed</button>
      <button className="btn" onClick={() => setFilter('active')}>Active</button>
    </div>
  );
}