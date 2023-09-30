"use client";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";
import React, { useState } from "react";
import Image from "next/image";

const ImageWithLoading = ({ src, alt }: { src: string; alt: string }) => {
  const [loading, setLoading] = useState(true);

  return (
    <div>
      {loading ? (
        <FontAwesomeIcon icon={faSpinner} spin />
      ) : (
        <Image
          src={src}
          alt={alt}
          width={500}
          height={500}
          onLoad={() => {
            setLoading(false);
            console.log("loaded!");
          }}
        />
      )}
    </div>
  );
};

export default ImageWithLoading;
