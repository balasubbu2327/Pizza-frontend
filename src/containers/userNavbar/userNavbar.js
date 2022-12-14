import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

export default function UserNavbar() {
  const email = window.localStorage.getItem("email");
  const navigate = useNavigate();
  const Logout = () => {
    window.localStorage.clear();
    navigate("/login");
  };
  const quantity = useSelector((state) => state.cart.quantity);

  return (
    <div>
      <nav class="navbar navbar-expand-lg bg-primary text-center mt-1">
        <div class="container">
          <Link class="navbar-brand fw-bold text-white" to="/">
            <img
              src="https://pngimg.com/uploads/letter_b/small/letter_b_PNG24.png"
              alt="logo"
            />
            Bala's<span className="text-white"> Pizza</span>
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
            <ul class="navbar-nav ms-auto mb-2 mb-lg-0 gap-3">
              <li class="nav-item">
                <Link
                  className="btn btn-outline-light bg-white border-0 fw-bold text-decoration-none text-dark MainContent_Text"
                  to="/products"
                >
                  Pizza's
                </Link>
              </li>
              <li class="nav-item dropdown fw-bold  MainContent_Text">
                <span
                  class="nav-link dropdown-toggle text-danger fs-5 "
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  {email}
                </span>
                <ul class="dropdown-menu">
                  <li>
                    <Link
                      className="btn btn-outline-light bg-white border-0 fw-bold text-decoration-none text-danger MainContent_Text"
                      to="/"
                      onClick={Logout}
                    >
                      Logout
                    </Link>
                  </li>
                </ul>
              </li>
              <li class="nav-item">
                <button
                  type="button"
                  class="btn btn-outline-light text-danger border-0 position-relative"
                  onClick={() => navigate("/cart")}
                >
                  <span
                    class="iconify"
                    data-icon="dashicons:food"
                    data-width="30"
                  ></span>
                  <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill fs-6 bg-primary">
                    {quantity}
                    <span class="visually-hidden">unread messages</span>
                  </span>
                </button>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}
