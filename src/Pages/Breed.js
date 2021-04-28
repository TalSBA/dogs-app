import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import ImageModal from "../Components/ImageModal";
import Masonry from "react-masonry-css";
import "../Styles/Breed.css";
import { Card } from "react-bootstrap";

function Breed() {
  const { breed } = useParams();
  const [breedImages, setImages] = useState([]);
  const [showModal, setShowModal] = useState({ state: false, image: "" });

  useEffect(() => {
    let count = 10;
    axios
      .get("https://dog.ceo/api/breed/" + breed + "/images")
      .then((response) => {
        for (const img of response.data.message) {
          if (count === 0) {
            break;
          }
          count--;
          setImages((oldArr) => [...oldArr, img]);
        }
      });
  }, []);

  return (
    <div className="p-breed">
      <h1>{breed}</h1>
      <Masonry
        breakpointCols={3}
        className="my-masonry-grid"
        columnClassName="my-masonry-grid_column"
      >
        {breedImages &&
          breedImages.map((breed) => {
            return (
              <Card onClick={() => setShowModal({ state: true, image: breed })}>
                <Card.Img variant="top" src={breed} />
              </Card>
            );
          })}
      </Masonry>

      <ImageModal
        show={showModal.state}
        breedImage={showModal.image}
        onHide={() => setShowModal({ state: false, image: "" })}
      />
    </div>
  );
}

export default Breed;
