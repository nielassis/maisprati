import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import "./footer.css";

export default function Footer() {
  return (
    <footer className="app-footer">
      <p>© {new Date().getFullYear()} MovieSearch. All rights reserved.</p>
      <div className="footer-icons">
        <a
          href="https://github.com/nielassis"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub />
        </a>
        <a
          href="https://linkedin.com/in/nielassis"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin />
        </a>
      </div>
    </footer>
  );
}
