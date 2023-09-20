import React from "react";
import "@/styles/customerReviews";
import { reviewsArray } from "@/app/utils/ReviewsArray";

const CustomerReviews = () => {
  return (
    <div>
      <h1>Customer Reviews</h1>
      <div className="container">
        {reviewsArray.map((review, index) => (
          <div key={index} className="review-box">
            <h3 className="review-name">{review.name}</h3>
            <p className="review-date">{review.date}</p>
            <p className="review">{review.review}</p>
          </div>
        ))}
        <div className="dots">
          {reviewsArray.map((_, index) => (
            <span key={index} className="dot"></span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CustomerReviews;
