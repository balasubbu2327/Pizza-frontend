import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../Navbar/Navbar";

export default function ContactPage() {
  return (
    <>
      <Navbar />
      <div className="container">
        <div className="row text-center mt-3">
          {/* Quotes */}
          <div className="col">
            <h6 className="text-danger fw-bold text-opacity-75">
              - Enjoy Life It's Delicious{" "}
            </h6>
          </div>
        </div>
        <div className="row mt-4 m-2">
          {/* Address */}
          <div className="col-sm-6 text-center">
            <h2 className="MainContent_Text text-danger ">
              Visit Our Restaurant
            </h2>
            <p className="text-secondary">
              <span> Bala's Pizza Restaurant </span>
              <br />
              No.17/6, First floor, <br /> Pandian Complex, <br /> Melur Outer
              Ring Rd, <br /> Bastin Nagar, Madurai, <br /> Tamil Nadu- 625 016.{" "}
            </p>
            <img
              style={{ width: "60%", height: "40%" }}
              src="https://www.techdext.com/images/User_Image_Files/28_Contact-Us.png"
              alt=""
            />
          </div>
          {/* Contact Page */}
          <div className="col-sm-4 col-md-6 col-lg-4 rounded-5 shadow-lg p-4 mt-5">
            <form className="mb-3">
              <div className="d-flex flex-column gap-3 text-center">
                {/* heading */}
                <h5 className="MainContent_Text text-primary">Reach Us</h5>
                {/* your name */}
                <div>
                  <input
                    className="form-control"
                    type="text"
                    name="name"
                    id="name"
                    placeholder="Name"
                  />
                </div>
                {/* your email */}
                <div>
                  <input
                    className="form-control"
                    type="email"
                    name="email"
                    id="email"
                    placeholder="Email"
                  />
                </div>
                {/* your contactno */}
                <div>
                  <input
                    className="form-control"
                    type="string"
                    name="contactno"
                    id="contactno"
                    placeholder="Contact Number"
                  />
                </div>
                {/* your message */}
                <div>
                  <textarea
                    className="form-control"
                    type="text"
                    name="message"
                    id="message"
                    placeholder="Message"
                  />
                </div>
                {/* button */}
                <div>
                  <button
                    type="submit"
                    className=" btn btn-outline-danger fw-bold"
                  >
                    Send
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
