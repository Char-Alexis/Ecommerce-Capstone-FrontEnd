import axios from "axios";
import React, { useEffect } from "react";
import { Link } from "react-router-dom";

const ProductsListing = (props) => {
  return (
    <React.Fragment>
      <table class="table ">
        <thead>
          <tr>
            <th>Name</th>
            <th>Category</th>
            <th>Price</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
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
              
              <tr key={product.id}>
                <td>{product.product_name}</td>
                <td>{product.category}</td>
                <td>{product.price}</td>
                <td>{product.description}</td>
                <td>
                  <Link to={`/details/${product.id}`}>View</Link>
                  {/* <button>Add Review</button> */}
                  <button onClick={onClickAddToCart}>Add to Cart</button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </React.Fragment>
  );
};

export default ProductsListing;
