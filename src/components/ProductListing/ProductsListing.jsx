import axios from "axios";
import React, { useEffect } from "react";
import { NavLink, Link } from "react-router-dom";
import { Card } from "react-bootstrap"

const ProductsListing = (props) => {
  return (
      <Card style={{ width: '18rem'}} >
        <Card.Body>
        <div className="wrapper">
          {props.productList.map((product) => {
            console.log(product);
            const onClickAddToCart = async () => {
              console.log(`Adding Product(${product.id}) To Cart`)
              await axios.post("http://127.0.0.1:8000/api/store/cart/", {
                product_id: product.id,
                quantity: 1,
                username: localStorage.getItem("username"),
                price: product.price
              })

            }
            return (
             <div className="row" > 
             <div class="col-sm-12">
              <tr key={product.id}>
                <p>Name: {product.product_name}</p>
                <p>Description: {product.description}</p>
                <p>Category: {product.category}</p>
                <p>$ {product.price}</p>
                <p>
                  <NavLink to={`/details/${product.id}`} activeStyle={{color:"green", textDecoration:"none"}}>View</NavLink>
                  
                  <button type = "button" class="btn btn-light" onClick={onClickAddToCart}>Add to Cart</button>
                </p>
              </tr>
              </div>
          </div>
            );
          })}
        </div>
          </Card.Body>

        </Card>
  );
};

export default ProductsListing;
