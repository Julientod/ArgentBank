import React from "react";
import "./Feature.scss";

const Feature = (props) => {
  const { imgSrc } = props;
  const { imgAlt } = props;
  const { title } = props;
  const { text } = props;
  return (
    <div className="feature">
      <img className="feature--icon" src={imgSrc} alt={imgAlt} />
      <h3>{title}</h3>
      <p>{text}</p>
    </div>
  );
};

export default Feature;
