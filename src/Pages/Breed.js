import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import ImageModal from "../Components/ImageModal";

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
    <div>
      <h1>{breed}</h1>
      {breedImages &&
        breedImages.map((breed) => {
          return (
            <img
              width="250px"
              height="150px"
              src={breed}
              onClick={() => setShowModal({ state: true, image: breed })}
            ></img>
          );
        })}
      <ImageModal
        show={showModal.state}
        breedImage={showModal.image}
        onHide={() => setShowModal({ state: false, image: "" })}
      />
    </div>
  );
}

export default Breed;
