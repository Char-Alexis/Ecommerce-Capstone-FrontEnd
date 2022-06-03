import axios from "axios";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ReviewForm from "../ReviewForm/ReviewsForm";


function ProductDetails(props) {
  const [product, setProduct] = useState();
  const params = useParams();
  useEffect(() => {
    axios
      .get(`http://127.0.0.1:8000/api/store/product/${params.id}/`)
      .then((res) => {
        setProduct(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  if (!product) {
    return <h4>Loading product...</h4>;
  } else {
    console.log("product", product);
    return (
      <div>
        <div className="container">
          <div class= "row">
            <div className="col">
              <h1>{product.product_name}</h1>
            </div>
          </div>
          <div className="col">
            <ul>
              <p>{product.description}</p>
              <p>Skin Type:{product.category}</p>
              <p>Price:${product.price}</p>
            </ul>
          </div>
      </div>
      <ReviewForm productId={params.id} user={props.user} />
      </div>
    );
  }
}

export default ProductDetails;
