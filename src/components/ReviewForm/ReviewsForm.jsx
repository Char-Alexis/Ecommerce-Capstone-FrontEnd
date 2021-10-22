import React, { useEffect, useState } from "react";
import axios from "axios";

const ReviewForm = (props) => {
  const [postReview, setPostReview] = useState({
    comment: "",
    product_id: props.productId,
    // user_id: props.userId
  });

  const [displayReview, setDisplayReview] = useState([]);

  useEffect(() => {
    fetchReviews();
  }, [postReview]);


  async function fetchReviews() {
    await axios
      .get(`http://127.0.0.1:8000/api/store/review/get/${props.productId}/`)
      .then((response) => {
        setDisplayReview(response.data);
      });
  }

  const handleChange = (event) => {
    const newReview = {
      ...postReview,
      [event.target.name]: event.target.value,
    };
    setPostReview(newReview);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(postReview)
    axios.post(`http://127.0.0.1:8000/api/store/review/`, postReview);
  };

  return (
    <div className="reviews">
      <form onSubmit={handleSubmit} className="form">
        <input
          type="text"
          name="comment"
          className="form-control"
          onInput={handleChange}
          value={postReview.comment}
        />
        <button type="submit" className="btn btn-dark btn-sm">
          Post
        </button>
      </form>
      <div className="">
        <h1 className="">Reviews</h1>
      {displayReview && displayReview.map((displayReview) => (
        <><h4>user:{displayReview.user_id}</h4><h2>{displayReview.comment}</h2></>
      ))}
      </div>
    </div>
  );
  // getReviews.filter(getReviews => getReviews.commentId)
};

export default ReviewForm;
