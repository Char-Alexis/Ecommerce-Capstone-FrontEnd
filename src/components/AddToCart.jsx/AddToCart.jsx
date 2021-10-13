import { useState } from "react";
import React from "react";

const AddToCart = (props) => {
  const [cart, setCart] = useState([]);
  return (
    <div>
      <span> Items in cart:{cart.length}</span>
      <br />
      <span> Total: {price} </span>
    </div>
  );
};

export default AddToCart;
