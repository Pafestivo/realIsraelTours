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
    const walk = (x - startX) * 2;
    e.currentTarget.scrollLeft = scrollLeft - walk;
  };

  const handleDotClick = (index: number) => {
    const container = document.querySelector(".container");
    if (container) {
      const box = container.children[index] as HTMLElement;
      container.scrollLeft = box.offsetLeft;
    }
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
            <h3 className="review-name">{review.name}</h3>
            <p className="review-date">{review.date}</p>
            <p className="review">{review.review}</p>
          </div>
        ))}
      </div>
      <div className="dots">
        {" "}
        {reviewsArray.map((_, index) => (
          <span
            key={index}
            className="dot"
            onClick={() => handleDotClick(index)}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default CustomerReviews;
