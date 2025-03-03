import { Outlet, Link } from "react-router-dom";

const Layout = () => {
  return (
    <>
    <header>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>&nbsp;&nbsp;
          </li>

          <li>
            <Link to="/Contact">Contact</Link>&nbsp;&nbsp;
          </li>
        </ul>
      </nav>
      </header>

      <Outlet />
    </>
  );
};

export default Layout;