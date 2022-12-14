import React from "react";
import { useNavigate } from "react-router-dom";

export default function Success() {
  const navigate = useNavigate();
  return (
    <div className="container mt-5">
      <div className="row text-center mt-5">
        <div className="col mt-2">
          <img
            src="https://cdn.dribbble.com/users/2185205/screenshots/7886140/02-lottie-tick-01-instant-2.gif"
            className="w-25"
            alt=""
          />
          <h4 className="text-success">Payment Successfully Completed</h4>
          <p className="fw-bold">
            Thanks for visiting <span className="text-danger">Bala's</span>
            <span className="text-primary"> Pizza</span> Restaurant
          </p>
          <p className="mb-5">
            <span
              className="btn btn-outline-primary fw-bold border-0"
              onClick={() => navigate("/")}
            >
              {" "}
              <span
                class="iconify"
                data-icon="akar-icons:arrow-back-thick-fill"
              ></span>{" "}
              Home Page{" "}
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}
