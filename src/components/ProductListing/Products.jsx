import axios from "axios";
import React, { useEffect } from "react";
import { Link } from "react-router-dom";

const Products = (props) => {
  return (
    <React.Fragment>
      <table class="table table-striped table-dark">
        <thead>
          <tr>
            <th>Name:</th>
            <th>Category</th>
            <th>Price</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          {props.productList.map((product) => {
            console.log(product);
            return (
              <tr key={product.product_id}>
                <td>{product.product_name}</td>
                <td>{product.category}</td>
                <td>{product.price}</td>
                <td>{product.description}</td>
                <td>
                  <Link to={`/details/${product.productId}`}>
                    Product Details
                  </Link>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </React.Fragment>
  );
};

export default Products;
