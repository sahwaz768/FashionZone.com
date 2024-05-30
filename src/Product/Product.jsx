import React, { useState } from "react";
import "./product.css";
import { CiStar } from "react-icons/ci";
import { IoIosAdd } from "react-icons/io";
import { RiSubtractFill } from "react-icons/ri";
import Button from "react-bootstrap/Button";
import AnotherHeader from "../FirstPage/AnotherHeader";

const Product = () => {
  var [a, b] = useState(1);
  return (
    <>
      <AnotherHeader/>
      <div className="shirtproduct">
        <img
          src="https://www.beyours.in/cdn/shop/products/light-blue-classic-shirt-5.jpg?v=1715933855&width=1200"
          alt=""
          width={350}
          height={500}
        />
        <div className="mt-5 descrip">
          <h5>Mens Plan sky color Formal shirt</h5>
          <p>Special Offer</p>
          <div className="price">
            <h3>$99</h3>
            <s>$199</s>
            <h7>50% off</h7>
          </div>
          <h6>
            3.9 <CiStar />
          </h6>
          <p className="mt-3">Color</p>
          <select name="" id="">
            <option value="">Blue</option>
            <option value="">Black</option>
            <option value="">White</option>
          </select>

          <div className="">
            <p>size</p>
            <select name="" id="">
              <option value="">SELECT YOUR SIZE</option>
              <option value="">S</option>
              <option value="">M</option>
              <option value="">L</option>
            </select>
          </div>

          <div className="qnty">
            <p>Quantity</p>
            <div className="qntybtn">
              <button onClick={() => b(a + 1)}>
                <IoIosAdd />
              </button>{" "}
              <h4>{a}</h4>{" "}
              <button onClick={() => b(a - 1)}>
                <RiSubtractFill />
              </button>
            </div>
          </div>
          <div className="my-5">
            <Button variant="outline-warning">BUY NOW</Button>
            <Button variant="outline-danger mx-3">ADD TO CART</Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Product;
