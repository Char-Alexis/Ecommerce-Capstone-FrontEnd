import React, { useEffect, useState } from "react";
import axios from "axios";

const ReviewForm = (props) => {
  const [getReviews, setGetReviews] = useState({
    comment: "",
    product_id: props.productId,
  });

  const [createReview, setCreateReview] = useState([]);

  useEffect(() => {
    fetchReviews();
  }, [getReviews]);


  async function fetchReviews() {
    await axios
      .get(`http://127.0.0.1:8000/api/store/review/get/${props.productId}/`)
      .then((response) => {
        setCreateReview(response.data);
      });
  }

  const handleChange = (event) => {
    const newReview = {
      ...getReviews,
      [event.target.name]: event.target.value,
    };
    setGetReviews(newReview);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(getReviews)
    axios.post("http://127.0.0.1:8000/api/store/review/", getReviews);
  };

  return (
    <div className="reviews">
      {/* <form onSubmit={handleSubmit} className="form">
        <input
          type="text"
          name="comment"
          className="form-control"
          onInput={handleChange}
          value={getReviews.comment}
        />
        <button type="submit" className="btn btn-dark btn-sm">
          Post
        </button>
      </form> */}
      <div className="">
        <h1 className="">Reviews</h1>
      {createReview && createReview.map((createReview) => (
        <><h4>user:{createReview.user_id}</h4><h2>{createReview.comment}</h2></>
      ))}
      </div>
    </div>
  );
  // getReviews.filter(getReviews => getReviews.commentId)
};

export default ReviewForm;
