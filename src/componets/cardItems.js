import React from "react";
import { Col, Card } from "react-bootstrap";
import { Link } from "react-router-dom";

function CardItems({
  image,
  label,
  height,
  width,
  imageHeight,
  gridColoumn,
  textAlign,
  href
}) {
  return (
    <Col
      md={gridColoumn}
      lg={gridColoumn}
      xs={12}
      style={{
        marginTop: 20
      }}
    >
      <Card
        style={{
          height,
          width
        }}
      >
        <Link to={href}>
          <Card.Img height={imageHeight} variant="top" src={image} />
        </Link>
        <Card.Body>
          <Card.Title
            style={{
              textAlign
            }}
          >
            {label}
          </Card.Title>
        </Card.Body>
      </Card>
    </Col>
  );
}

export default CardItems;
