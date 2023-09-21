"use client";
import React from "react";
import "@/styles/customerReviews.css";
import { reviewsArray } from "@/app/utils/ReviewsArray";

let isDown = false;
let startX: number;
let scrollLeft: number;

const CustomerReviews = () => {
  const handleMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
    isDown = true;
    startX = e.pageX - e.currentTarget.offsetLeft;
    scrollLeft = e.currentTarget.scrollLeft;
  };

  const handleMouseLeave = () => {
    isDown = false;
  };

  const handleMouseUp = () => {
    isDown = false;
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!isDown) return;
    e.preventDefault();
    const x = e.pageX - e.currentTarget.offsetLeft;
    const walk = (x - startX) * 5;
    e.currentTarget.scrollLeft = scrollLeft - walk;
  };

  return (
    <div>
      <h1>Customer Reviews</h1>
      <div
        className="container"
        onMouseDown={handleMouseDown}
        onMouseLeave={handleMouseLeave}
        onMouseUp={handleMouseUp}
        onMouseMove={handleMouseMove}
      >
        {reviewsArray.map((review, index) => (
          <div key={index} className="review-box">
            <p className="review">{review.review}</p>
            <p className="review-date">{review.date}</p>
            <h3 className="review-name">From: {review.name}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CustomerReviews;
