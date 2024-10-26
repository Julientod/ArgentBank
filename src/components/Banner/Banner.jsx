import React from "react";
import BannerText from "./BannerText";
import imgBanner from "../../assets/img/bank-tree.webp";
import "./Banner.scss";

function Banner() {
  return (
    <div className="banner">
      <img
        className="banner--img"
        src={imgBanner}
        alt="Little money plant"
        rel="preload"
      />
      <BannerText />
    </div>
  );
}

export default Banner;
