import axios from "axios";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ReviewForm from "../ReviewForm/ReviewsForm";
import { Card } from "react-bootstrap"

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
      <Card>
      <div>
          <Card.Body>
            <div className="card"  >
              <div className="d-flex justify-content-center">
              <h1>{product.product_name}</h1>
            </div>

              </div>
              <ul class="float-right">
                <br></br>
                <div className="d-flex justify-content-around"/>
                <li class="card-text">{product.category}</li>
                <li class="card-text">{product.price}</li>
                <li class="card-text">{product.description}</li>
                
              </ul>
              {/* <p>{product.category}</p>
              <p>{product.price}</p>
              <p>{product.description}</p> */}
              {/* <button>Add Review</button> */}
        </Card.Body>
      </div>

      </Card>
        <h4>Reviews</h4>
        <ReviewForm productId={params.id} />
        </div>
    );
  }
}

export default ProductDetails;
