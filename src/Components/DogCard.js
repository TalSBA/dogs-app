import React from "react";
import { Card } from "react-bootstrap";
import "../Styles/DogCard.css";

function DogCard({breed, image}) {
  return (
    <div className="c-dog-card">
      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={image} />
        <Card.Body>
          <Card.Title>{breed}</Card.Title>
        </Card.Body>
      </Card>
    </div>
  );
}

export default DogCard;
