import React from "react";

const Image = ({ imageClass, src, alt }) => {
  return <img className={imageClass} src={src} alt={alt} />;
};

export default Image;
