import axios from "axios";
import React, { useEffect } from "react";
import { NavLink, Link } from "react-router-dom";
import { Card, Row, Container } from "react-bootstrap"
import "./ProductListing.css";

const ProductsListing = (props) => {

   
  return (
    <div>

    <h1>Our Products</h1>

    {/* Adding to Cart */}
    <div>
        <div className="">
          {props.productList.map((product) => {
            console.log(product);
            const onClickAddToCart = async () => {
              // console.log(`Adding Product(${product.id}) To Cart`)
              // await axios.post("http://127.0.0.1:8000/api/store/cart/", {
                // product_id: product.id,
              //   quantity: 1,
              //   username: localStorage.getItem("username"),
              //   price: product.price
              // })
              alert ('Added to cart.')

            }
            return (
              
              //Details of each product
      
           
               
              <div class="container" >
                <div key={product.id}>
                <h1>{product.product_name}</h1>
                <p>${product.price}</p>

                  <p>
                    <NavLink to={`/details/${product.id}`}>View</NavLink>
                    
                    <button type = "button" className="quick-add-btn" onClick={onClickAddToCart}  >Quick Add</button>
                  </p>
                </div>
              </div>
            );
          })}
        </div>
        </div>
        </div>
  );
};

export default ProductsListing;
