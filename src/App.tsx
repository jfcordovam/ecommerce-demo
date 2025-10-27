import { Outlet, Link } from "react-router-dom";

export default function App() {
  return (
    <div style={{ padding: "2rem" }}>
      <h1>App</h1>
      <nav style={{ marginBottom: "1rem" }}>
        <Link to="/">Home</Link> |{" "}
        <Link to="/offers">Offers</Link>
      </nav>

      <Outlet />
    </div>
  );
}
