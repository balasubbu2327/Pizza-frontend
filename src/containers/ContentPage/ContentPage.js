import React from "react";
import "./ContentPage.css";
import { Link } from "react-router-dom";
// import LoginPage from "../LoginPage/LoginPage";
import Navbar from "../Navbar/Navbar";

export default function ContentPage() {
  return (
    <div className="main">
      <Navbar />
      <div className="container mt-3 main_content">
        <div className="row justify-content-center">
          {/*Main Contant */}
          <div className="col-sm-6 col-lg-5">
            <h1 className="fw-bold text-danger">
              Bala's<span className="text-primary">Pizza</span>
            </h1>
            <p className="text-primary fw-bold">-Restaurant</p>
            <h1 className="MainContent_Text mb-3">
              Enjoy Delicious Pizza
              <br /> at Great Tastes
            </h1>
            <p className="text-secondary">
              Choose your favourite pizza pasta from the Bala's pizza menu. Get
              fresh veg and non-veg pizza with wide range of <br />
              sides & beverages, tikka masala, cheesy jalapeno and more.
            </p>
            <Link
              to="/products"
              className="btn btn-outline-primary fw-bold mb-5"
            >
              Order Now
            </Link>
          </div>
          {/* MainPage Image */}
          <div className="col-sm-6 col-lg-5">
            <img
              className="image"
              src="https://i2-prod.mirror.co.uk/incoming/article24444336.ece/ALTERNATES/s1200c/0_MS-Little-Italy-Dine-In-%C2%A315.jpg"
              alt="image"
            />
          </div>
        </div>
        <div className="row mt-3">
          <div className="col text-center">
            <div>
              <h3 className="fw-bold MainContent_Text">Our Awesome Service</h3>
            </div>
            <div className="d-flex justify-content-between gap-2">
              <div className="shadow-lg rounded-3 p-3 ">
                <span
                  class="iconify text-danger"
                  data-icon="dashicons:food"
                  data-width="40"
                ></span>
                <h6 className="fw-bold text-primary">Quality Food</h6>
              </div>
              <div className="shadow-lg rounded-3 p-3">
                <span
                  class="iconify text-danger"
                  data-icon="mdi:truck-delivery-outline"
                  data-width="40"
                ></span>
                <h6 className="fw-bold text-primary">Fast Delivery</h6>
              </div>
              <div className="shadow-lg rounded-3 p-3">
                <span
                  class="iconify text-danger"
                  data-icon="bxs:offer"
                  data-width="40"
                ></span>
                <h6 className="fw-bold text-primary">More Offers</h6>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
