"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import "@/styles/imageGallery.css";

const ImageGallery: React.FC = () => {
  const [imageCount, setImageCount] = useState<number>(12);
  const [showOverlay, setShowOverlay] = useState<boolean>(false);
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const maxImages = 23; // Replace with the actual number of images if changed

  const fetchMoreImages = () => {
    if (imageCount < maxImages) {
      setImageCount(imageCount + 8);
    }
  };

  const handleImageClick = (imageId: number) => {
    setSelectedImage(imageId);
    setShowOverlay(true);
  };

  const handleKeyDown = (event: KeyboardEvent) => {
    if (event.key === "Escape") {
      setShowOverlay(false);
    }
  };

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  const images = [];
  for (let i = 1; i <= Math.min(imageCount, maxImages); i++) {
    images.push(
      <div key={i}>
        <Image
          className="singleImage"
          src={`/images/${i}.webp`}
          alt={`Image ${i}`}
          width={300}
          height={200}
          layout="responsive"
          loading={i <= 12 ? "eager" : "lazy"}
          onClick={() => handleImageClick(i)}
        />
      </div>
    );
  }

  return (
    <>
      <div className="imagesContainer">{images}</div>
      {imageCount < maxImages && (
        <button className="load-more" onClick={fetchMoreImages}>
          Load More
        </button>
      )}

      {showOverlay && (
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundColor: "rgba(0, 0, 0, 0.7)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            zIndex: 1000,
          }}
          onClick={() => setShowOverlay(false)}
        >
          <Image
            src={`/images/full_quality/${selectedImage}.jpg`}
            alt={`Full Quality Image ${selectedImage}`}
            layout="intrinsic"
            width={800} // Original dimensions
            height={600} // Original dimensions
          />
        </div>
      )}
    </>
  );
};

export default ImageGallery;
