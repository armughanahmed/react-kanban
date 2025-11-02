import { Link, Outlet } from "react-router-dom";

export default function App() {
  return (
    <div>
      <nav style={{ marginBottom: "1rem" }}>
        <Link to="/" style={{ marginRight: "1rem" }}>
          Board
        </Link>
        <Link to="/about">About</Link>
      </nav>

      <hr />

      <Outlet />
    </div>
  );
}
