import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../Navbar/Navbar";

export default function About() {
  return (
    <div>
      <Navbar />
      <div className="row mt-4 justify-content-center">
        {/* About img */}
        <div className="col-sm-6 text-end">
          <img
            style={{ width: "90%" }}
            src="https://cdn.apartmenttherapy.info/image/upload/f_auto,q_auto:eco,c_fill,g_center,w_730,h_487/k%2Farchive%2F621d51e39799328857f0aa0bca1279cdfdb29a18"
            alt=""
          />
        </div>
        {/* About content */}
        <div className="col-sm-6 px-5">
          <p className="text-danger fw-bold">- About Us</p>
          <h2 className="MainContent_Text">
            Simple Way of <br /> Eating Delicious
          </h2>
          <p className="text-secondary">
            You can try several types of this simple dish.
            <br />
            You also easily apply it, especially for those of you who are
            beginners.
            <br /> A delight for veggie lovers! Choose from our wide range of
            delicious vegetarian pizzas, it's softer and tastier.
            <br />
            Choose your favourite non-veg pizzas from the Bala's Pizza menu.
            <br />
            Get fresh non-veg pizza with your choice of crusts & toppings
            Complement your pizza with wide range of sides & beverages available
            at Bala's Pizza.
          </p>
        </div>
      </div>
    </div>
  );
}
