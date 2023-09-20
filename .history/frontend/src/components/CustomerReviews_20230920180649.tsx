import React from "react";
import "@/styles/CustomerReviews";
import { reviewsArray } from "@/app/utils/ReviewsArray";

const CustomerReviews = () => {
  return (
    <div>
      <h1>Customer Reviews</h1>
      <div className="container">
        {reviewsArray.map((review, index) => (
          <div key={index} className="review">
            <h3>review.name</h3>
            <p>review.date</p>
            <p>review.review</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CustomerReviews;
