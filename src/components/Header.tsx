import { Link } from "@tanstack/react-router";

function Header() {
  return (
    <header className="header">
      <h1>Tanstack Router</h1>
      <nav className="navigation">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
      </nav>
    </header>
  );
}

export default Header;
