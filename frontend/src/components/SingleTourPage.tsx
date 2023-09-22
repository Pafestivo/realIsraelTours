import Header from "@/components/Header";
import ScrollArrow from "@/components/ScrollArrow";
import React from "react";
import "@/styles/singleTourPage.css";
import Image from "next/image";

interface SingleTourPageProps {
  tourTitle: string;
  tourBanner: string;
  promoTitle: string;
  promoDescription: string[];
  chapter1Title?: string;
  chapter1Info?: string[];
  chapter1Image?: string;
  chapter2Image?: string;
  chapter2Title?: string;
  chapter2Info?: string[];
  conclusionTitle?: string;
  conclusionInfo?: string[];
}

const SingleTourPage = ({
  tourTitle,
  tourBanner,
  promoTitle,
  promoDescription,
  chapter1Title,
  chapter1Info,
  chapter1Image,
  chapter2Image,
  chapter2Info,
  chapter2Title,
  conclusionInfo,
  conclusionTitle,
}: SingleTourPageProps) => {
  return (
    <div className="single-tour-div">
      <Header currentlyActivePage="Tours" />
      <div className="page-cover-photo">
        <div>
          <h1>{tourTitle}</h1>
          <ScrollArrow />
        </div>
        <img src={tourBanner} alt="Tour Banner" />
      </div>
      <div className="full-size-container">
        <h1>{promoTitle}</h1>
        {promoDescription.map((infoBlock: string) => {
          return <p key={infoBlock}>{infoBlock}</p>;
        })}
      </div>

      {chapter1Title && chapter1Image && chapter1Info && (
        <section className="chapter">
          <div className="chapter-info">
            <h1>{chapter1Title}</h1>
            {chapter1Info?.map((infoBlock: string) => {
              return <p key={infoBlock}>{infoBlock}</p>;
            })}
          </div>
          <div className="image-container">
            <Image
              src={chapter1Image}
              alt={chapter1Image}
              layout="fill"
              style={{
                objectFit: "cover",
              }}
            />
          </div>
        </section>
      )}

      {chapter2Title && chapter2Image && chapter2Info && (
        <section className="chapter">
          <div className="image-container">
            <Image
              src={chapter2Image}
              alt={chapter2Image}
              layout="fill"
              style={{
                objectFit: "cover",
              }}
            />
          </div>
          <div className="chapter-info">
            <h1>{chapter2Title}</h1>
            {chapter2Info.map((infoBlock: string) => {
              return <p key={infoBlock}>{infoBlock}</p>;
            })}
          </div>
        </section>
      )}

      {conclusionTitle && conclusionInfo && (
        <section className="conclusion">
          <h1>{conclusionTitle}</h1>
          {conclusionInfo.map((infoBlock: string) => {
            return <p key={infoBlock}>{infoBlock}</p>;
          })}
        </section>
      )}
    </div>
  );
};

export default SingleTourPage;
