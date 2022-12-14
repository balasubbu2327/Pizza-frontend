import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
// import { ProductAPI } from "../../Global files/ProductsAPI";
import axios from "axios";
import { useDispatch } from "react-redux/es/hooks/useDispatch";
import { addProduct } from "../../redux/cartRedux";
import UserNavbar from "../userNavbar/userNavbar";

export default function ProductInfo() {
  const authToken = window.localStorage.getItem("authToken");
  const navigate = useNavigate();
  const { id } = useParams();
  const [product, setProduct] = useState({});
  const [quantity, setQuantity] = useState(1);
  const dispatch = useDispatch();

  const getProductById = async () => {
    try {
      const { data } = await axios.get(
        `https://pizza-joth.onrender.com/products/${id}`
      );
      setProduct(data);
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    getProductById();
  }, [id]);

  const handleQuantity = (type) => {
    if (type === "dec") {
      quantity > 1 && setQuantity(quantity - 1);
    } else {
      setQuantity(quantity + 1);
    }
  };

  const handleClick = () => {
    dispatch(addProduct({ ...product, price: product.price, quantity }));
  };

  return (
    <div className="container">
      <UserNavbar />
      {authToken && (
        <div className="row gap-2 m-2">
          {/*product Image */}
          <div className="col-sm-6">
            <img src={product.img} className="w-100" alt="" />
          </div>
          {/* Product Information */}
          <div className="col mt-5">
            <h3 className="MainContent_Text">{product.name}</h3>
            <h6 className="text-secondary">{product.desc}</h6>
            <p className="fw-bold">
              <span class="iconify" data-icon="emojione:star"></span>{" "}
              {product.rating}
            </p>
            <h5>
              {" "}
              <span
                class="iconify text-danger"
                data-icon="bxs:offer"
                data-width="30"
              ></span>{" "}
              {product.offer} Offer
            </h5>
            <h4>??? {product.price}</h4>
            <button
              className="btn btn-outline-danger text-primary fw-bold"
              onClick={handleClick}
            >
              Add To Cart
            </button>{" "}
            <button
              className="btn btn-none border-0"
              onClick={() => handleQuantity("inc")}
            >
              <span
                class="iconify text-danger"
                data-icon="bi:file-plus-fill"
                data-width="40"
              ></span>
            </button>
            <span className="fw-bold">{quantity}</span>
            <button
              className="btn btn-none border-0"
              onClick={() => handleQuantity("dec")}
            >
              <span
                class="iconify text-primary"
                data-icon="bi:file-minus-fill"
                data-width="40"
              ></span>
            </button>
            <br />
            <button
              className="btn btn-outline-white  text-secondary fw-bold"
              onClick={() => navigate("/products")}
            >
              <span
                class="iconify"
                data-icon="akar-icons:arrow-back-thick-fill"
              ></span>{" "}
              Back
            </button>
          </div>
        </div>
      )}
      {!authToken && navigate("/login")}
    </div>
  );
}
