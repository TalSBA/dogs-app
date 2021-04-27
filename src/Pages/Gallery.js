import axios from "axios";
import React, { useEffect, useState } from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import DogCard from "../Components/DogCard";
import SearchBox from "../Components/SearchBox";
import DogModel from "../Model/DogModel";
import "../Styles/Gallery.css";

function Gallery(props) {
  const [dogs, setDogs] = useState([]);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    loadDogs();
  }, []);

  function loadDogs() {
    setDogs([]);
    let count = 10;
    axios.get("https://dog.ceo/api/breeds/list/all").then((response) => {
      for (const breed in response.data.message) {
        if (count === 0) {
          break;
        }
        count--;
        axios
          .get("https://dog.ceo/api/breed/" + breed + "/images/random")
          .then((response2) => {
            setDogs((oldArr) => [
              ...oldArr,
              new DogModel(breed, response2.data.message),
            ]);
          });
      }
    });
  }

  function handleSearchChange(newSearchText) {
    setSearchText(newSearchText);
  }

  let dogsCard;
  if (dogs) {
    dogsCard = dogs.filter((dog) => {
      return dog.breedName.toLowerCase().includes(searchText.toLowerCase());
    });
  }

  return (
    <Container className="p-gallery">
      <div className="head-page">
        <SearchBox
          placeholder="Search..."
          searchText={searchText}
          onSearchChange={handleSearchChange}
        />
        <Button onClick={() => loadDogs()}>Update Images</Button>
      </div>
      <Row>
        {dogsCard &&
          dogsCard.map((dog, index) => (
            <Col key={index} lg={6} md={7}>
              <DogCard key={index} breed={dog.breedName} image={dog.image} />
            </Col>
          ))}
      </Row>
    </Container>
  );
}

export default Gallery;
