import React from "react";
import "./Banner.scss";

function BannerText() {
  return (
    <div className="banner-text">
      <p className="banner-text--xl">No fees.</p>
      <p className="banner-text--xl">No minimum deposit.</p>
      <p className="banner-text--xl">High interest rates</p>
      <p className="banner-text--s">
        Open a savings account with Argent Bank today!
      </p>
    </div>
  );
}

export default BannerText;
