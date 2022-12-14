import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import StripeCheckout from "react-stripe-checkout";
import UserNavbar from "../userNavbar/userNavbar";
import { useDispatch } from "react-redux";
import { removeProduct } from "../../redux/cartRedux";
import axios from "axios";
// import { ProductAPI } from "../../Global files/ProductsAPI";
import { useNavigate } from "react-router-dom";
import "./Cart.css";

const KEY = process.env.REACT_APP_STRIPE;

export default function Cart() {
  const navigate = useNavigate();
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const product = cart.products;
  const quantity = cart.quantity;
  const total = cart.total;

  const handleRemove = () => {
    dispatch(removeProduct({ product, price: product.price, quantity, total }));
  };

  async function handleToken(token, addresses) {
    const response = await axios.post(
      `https://pizza-joth.onrender.com/checkout/payment`,
      {
        token,
        product,
      }
    );
    await axios.post(`https://pizza-joth.onrender.com/orders`, {
      token,
      product,
      total,
    });

    navigate("/success");
    if (response === 200) {
      navigate("/success");
      console.log("200");
    } else {
      console.log("error");
    }
  }

  return (
    <div className="container">
      <UserNavbar />
      <div className="row">
        {/* cart list */}
        <div className="col-lg-8">
          <div className="row">
            {product.map((product, index) => (
              <CartTemplate
                {...product}
                key={index}
                delbtn={
                  <button
                    onClick={handleRemove}
                    className="btn btn-outline-white border-0 text-danger"
                  >
                    <span
                      class="iconify"
                      data-icon="ant-design:delete-filled"
                    ></span>
                  </button>
                }
              />
            ))}
          </div>
        </div>
        {/* cart total */}
        <div className="col h-100 shadow-lg mt-2 rounded-3 text-center MainContent_Text m-2">
          <div className="p-3">
            <h4 className="fw-bold">Order summary</h4>
            <h6>
              Total Price:{" "}
              <span className="fw-bold fs-4">??? {Math.round(total)}</span>
            </h6>
            <StripeCheckout
              name="Bala's Pizza"
              billingAddress
              shippingAddress
              description={`Your amount is ??? ${total}`}
              amount={total * 100}
              token={handleToken}
              currency="inr"
              stripeKey={KEY}
            >
              <button className="btn btn-outline-danger text-primary fw-bold">
                Checkout Now
              </button>
            </StripeCheckout>
          </div>
        </div>
      </div>
    </div>
  );
}

function CartTemplate({ img, _id, name, quantity, price, delbtn }) {
  return (
    <div className="col-sm-5 col-md-6 MainContent_Text">
      <div class="card border-0 shadow-lg rounded-3 mx-auto text-center m-2">
        <div className="text-center">
          <img src={img} class="card-img-top w-50" alt="..." />
        </div>
        <div class="card-body">
          <h6 className="fw-bold text-secondary"> Name: {name}</h6>
          <h6 className="fw-bold text-secondary">Id: {_id}</h6>
          <h6 className="fw-bold text-secondary">Qty: {quantity}Nos</h6>
          <h6 className="fw-bold">
            Price: <span className="text-success">??? {price * quantity}</span>
          </h6>
          <span className="delbtn">{delbtn}</span>
        </div>
      </div>
    </div>
  );
}
