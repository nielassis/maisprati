import React from "react";
import { FaSearch, FaHeart, FaFilm } from "react-icons/fa";
import "./header.css";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="app-header">
      <div className="logo">
        <FaFilm className="logo-icon" />
        <span>MovieSearch</span>
      </div>

      <nav className="nav-links">
        <Link to="/favorites">
          <FaHeart /> Favoritos
        </Link>
      </nav>
    </header>
  );
}
