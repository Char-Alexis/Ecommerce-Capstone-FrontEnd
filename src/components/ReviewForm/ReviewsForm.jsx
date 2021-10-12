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
  }, [getReviews, createReview]);

  useEffect(() => {}, [getReviews, createReview]);

  async function fetchReviews() {
    await axios
      .get(`http://127.0.0.1:8000/api/store/review/${props.commentId}`)
      .then((response) => {
        setCreateReview(response.data);
      });
    setGetReviews({
      ...getReviews,
      product_id: props.productId,
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
    axios.post("http://127.0.0.1:8000/api/store/review", getReviews);
  };

  console.log(createReview);
  return (
    <div className="replies">
      <form onSubmit={handleSubmit} className="form">
        <input
          type="text"
          name="text"
          className="form-control"
          onInput={handleChange}
          value={getReviews.text}
        />
        <button type="submit" className="btn btn-dark btn-sm">
          Post
        </button>
      </form>
      {createReview.map((createReview) => (
        <div>{createReview.comment}</div>
      ))}
    </div>
  );
  // getReplies.filter(getReplies => getReplies.commentId)
};

export default ReviewForm;
