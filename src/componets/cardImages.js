import React from "react";
import { Image } from "react-bootstrap";

function CardImage({ image, label }) {
  return (
    <div>
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
      <center>
        <label>{label}</label>
      </center>
    </div>
  );
}

export default CardImage;
