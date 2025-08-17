import React from "react";
import { FaSearch, FaHeart, FaFilm } from "react-icons/fa";
import "./header.css";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="app-header">
      <div className="logo">
        <Link to="/" className="logo-link">
          <FaFilm className="logo-icon" />
          <span>MovieSearch</span>
        </Link>
      </div>

      <nav className="nav-links">
        <Link to="/favorites">
          <FaHeart /> Favorites
        </Link>
      </nav>
    </header>
  );
}
