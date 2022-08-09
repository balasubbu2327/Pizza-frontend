import React from "react";
import { useNavigate, Link } from "react-router-dom";
import "./Navbar.css";

export default function Navbar() {
  const navigate = useNavigate();
  return (
    <div>
      <nav class="navbar navbar-expand-lg bg-primary text-center mt-1">
        <div class="container">
          <Link class="navbar-brand fw-bold text-white title" to="/">
            <img
              src="https://pngimg.com/uploads/letter_b/small/letter_b_PNG24.png"
              alt="logo"
            />
            Bala's <span className="text-white">Pizza</span>
          </Link>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav ms-auto mb-2 mb-lg-0 gap-5">
              <li class="nav-item">
                <Link
                  className="btn btn-outline-danger fw-bold text-decoration-none MainContent_Text"
                  to="/About"
                >
                  ABOUT US
                </Link>
              </li>
              <li class="nav-item">
                <Link
                  className="btn btn-outline-danger fw-bold text-decoration-none MainContent_Text"
                  to="/contact"
                >
                  CONTACT
                </Link>
              </li>
              <li class="nav-item">
                <Link
                  className="btn btn-outline-danger fw-bold text-decoration-none MainContent_Text"
                  to="/login"
                >
                  LOGIN
                </Link>
              </li>
              <li class="nav-item">
                <Link
                  className="btn btn-outline-danger fw-bold text-decoration-none MainContent_Text"
                  to="/admin"
                >
                  ADMIN
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}
