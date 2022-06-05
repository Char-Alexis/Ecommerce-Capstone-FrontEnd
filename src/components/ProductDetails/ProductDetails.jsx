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
              <button>Add to Cart | ${product.price}</button>
            </ul>
          </div>
      </div>
      <p>Refill, Reuse, Repeat</p>
        {/* <div class="container"> */}
          <div class="row">
            <div class="col">
              <img src="/images/1.png" className="content" /> 
              Love them 
            </div>
            <div class="col">
              <img src="/images/2.png" className="content" /> 

              Done? We'll pick up. 
            </div>
            <div class="col">
              <img src="/images/3.png" className="content" /> 

              Cleaned, refilled, delivered - repeat.
            </div>
          {/* </div> */}
      </div>
      <ReviewForm productId={params.id} user={props.user} />
      </div>
    );
  }
}

export default ProductDetails;
