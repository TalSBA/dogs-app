import React from "react";
import { Card } from "react-bootstrap";
import "../Styles/DogCard.css";
import dogIcon from "../Styles/dog.png";

function DogCard({ breed, image }) {
  return (
    <div className="c-dog-card">
      <Card>
        <Card.Img variant="top" src={image} />
        <Card.Body>
          <Card.Title>{breed} </Card.Title>{" "}
          <span className="dog-icon">
            <img src={dogIcon}></img>
          </span>
        </Card.Body>
      </Card>
    </div>
  );
}

export default DogCard;
