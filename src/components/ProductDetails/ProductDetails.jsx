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
              <div className="d-inline-flex p-2">
              <h1>{product.product_name}</h1>
            </div>

              </div >
              <div className="">
              <ul >
             
                <p className="text-center font-weight-light">{product.description}</p>
                <p className="text-center font-weight-light">Skin Type:{product.category}</p>
                <p className="text-center font-weight-light">Price:$'{product.price}</p>
                
              </ul>
              </div>
        </Card.Body>
      </div>

      </Card>

        <ReviewForm productId={params.id} user={props.user} />
        </div>
    );
  }
}

export default ProductDetails;
