import { Outlet, Link } from "react-router-dom";
import '../Pages/Layout.css'

const Layout = () => {
  return (
    <>
      <header>
        <nav className="navbar">
          <ul className="navbar-list">
            <li className="navbar-item">
              <Link to="/" className="navbar-link">Home</Link>
            </li>
            <li className="navbar-item">
              <Link to="/Contact" className="navbar-link">Contact</Link>
            </li>
          </ul>
        </nav>
      </header>

      <Outlet />
    </>
  );
};

export default Layout;
