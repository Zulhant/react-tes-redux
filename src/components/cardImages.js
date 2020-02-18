import React from "react";
import { Image } from "react-bootstrap";

function CardImage({ image, label, textAlign }) {
  return (
    <div className="card-images">
      <Image
        src={image}
        roundedCircle
        style={{
          margin: 4,
          width: 100,
          height: 100
        }}
      />
      <br />
      <label style={{ textAlign }}>{label}</label>
    </div>
  );
}

export default CardImage;
