import React from "react";
import { Card } from "react-bootstrap";

function DogCard({breed, image}) {
  return (
    <div>
      <Card >
        <Card.Img variant="top" src={image} />
        <Card.Body>
          <Card.Title>{breed}</Card.Title>
        </Card.Body>
      </Card>
    </div>
  );
}

export default DogCard;
