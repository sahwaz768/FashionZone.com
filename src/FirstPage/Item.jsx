import React from "react";
import { Link } from "react-router-dom";

const Item =(props) => {
  return (
    <>
    
    <div className="product my-4 mx-4">
      <img className="my-2 mx-1" src={props.imgurl} alt="this is one of the product" width={210} height={300} />
      <p className="text-center">Lorem ipsum dolor sit amet.</p>
      <h6 className="text-center">$125</h6>
    <Link  to="/product"><button className="warning">see more</button></Link>
    </div>
    </>
  );
}

export default Item;