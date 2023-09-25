import Header from "@/components/Header";
import ImageGallery from "@/components/ImageGallery";
import React from "react";

const GalleryPage = () => {
  return(
    <div>
      <Header currentlyActivePage="Gallery" />
      <div style={{
        height: "110px"
      }}></div>
      <ImageGallery />
    </div>
  )
}

export default GalleryPage;