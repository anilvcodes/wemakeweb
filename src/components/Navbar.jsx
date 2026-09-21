import { useState } from "react";

export default function Navbar() {
  const [menu, setMenu] = useState(false);

  const closeMenu = () => {
    setMenu(false);
  };

  return (
    <header className="navbar">
      <a href="/" className="logo" onClick={closeMenu}>
        <span className="logo-mark">W</span>

        <span>
          WeMake<span className="lime">Web</span>
        </span>
      </a>

      <nav className={menu ? "nav-links open" : "nav-links"}>
        <a href="/" onClick={closeMenu}>
          Home
        </a>

        <a href="/about" onClick={closeMenu}>
          About
        </a>

        <a href="/services" onClick={closeMenu}>
          Services
        </a>

        <a href="/projects" onClick={closeMenu}>
          Projects
        </a>

        <a href="/contact" onClick={closeMenu}>
          Contact
        </a>
      </nav>

      <a href="/contact" className="nav-cta">
        Start a project <span>↗</span>
      </a>

      <button
        className="menu-btn"
        onClick={() => setMenu(!menu)}
        aria-label="Toggle menu"
      >
        {menu ? "×" : "☰"}
      </button>
    </header>
  );
}