import axios from "axios";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ReviewForm from "../ReviewForm/ReviewsForm";
import Scrolling from "./Scrolling";


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
      <div className="content">
        <h4>Refill, Reuse, Repeat</h4>
      </div>
        <div class="container">
          <div class="row">
            <div class="col">
              <img src="/images/1.png"  /> 
              <div className="sub-content"></div>
              <h5>Love them</h5>
              <p>Cleanse and moisturise with a clean conscience</p> 
            </div>
            <div class="col">
              <img src="/images/2.png" className="content" /> 

              <h5>Done? We'll pick up.</h5>
            </div>
            <div class="col">
              <img src="/images/3.png" className="content" /> 

              <h5>Cleaned, refilled, delivered - repeat.</h5>
              <p>Each bottle sent back will be sterilised, refilled with your fave product and delivered back to you. </p>
            </div>
          </div>
      </div>
      <ReviewForm productId={params.id} user={props.user} />
      <Scrolling />
      </div>
    );
  }
}

export default ProductDetails;
