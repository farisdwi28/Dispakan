import React from "react";

const ImageComponent = ({ src, alt, className }) => {
  return (
    <img
      className={className}
      src={src}
      alt={alt}
    />
  );
};

export default ImageComponent;
