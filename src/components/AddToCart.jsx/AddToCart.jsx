import { useState } from "react";
import React from "react";
import axios from "axios";
import ProductsListing from "../ProductListing/ProductsListing";

const AddToCart = (props) => {
  const { products } = props;

  
  return (
    <div>
      <h2>Products</h2>
      {products.map((products)=>(
        <ProductsListing key={products.id} product={products} ></ProductsListing>
      ))}
      </div>
  );
};

export default AddToCart;

// const addProducts = async(product, price) => {
//   const results = await axios.get(`http://127.0.0.1:8000/api/store/cart/${user}/`)
//   if(results.data.length === 0){
//     const order = { name: product, price: price};
//     axios.post("", order)
//   } else{
//     results.data.map((orderItem)=>{
//       if (product === orderItem.name){
//         orderItem.quantity += 1;
//         const order ={
//           name: product,
//           price: price
//         }
//         axios.post("")
//       }
//     })
//   }
// }