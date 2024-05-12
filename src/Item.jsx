import React from "react";

const Item =(props) => {
  return (
    <>
    
    <div className="product my-4 mx-4">
      <img className="my-2 mx-1" src={props.imgurl} alt="this is one of the product" width={210} height={300} />
      <p className="text-center">Lorem ipsum dolor sit amet.</p>
      <h6 className="text-center">$125</h6>
    </div>
    </>
  );
}

export default Item;