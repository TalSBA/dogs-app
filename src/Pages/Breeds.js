import axios from "axios";
import React, { useEffect, useState } from "react";
import { Button, Col, Container, Row, Spinner } from "react-bootstrap";
import { Link } from "react-router-dom";
import DogCard from "../Components/DogCard";
import SearchBox from "../Components/SearchBox";
import DogModel from "../Model/DogModel";
import "../Styles/Breeds.css";
import Masonry from "react-masonry-css";
import Menu from "../Components/Menu";
import Header from "../Components/Header";

function Breeds(props) {
  const [dogs, setDogs] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [isLoading, setLoading] = useState(true);
  const breedsCount = 10;
  useEffect(() => {
    loadDogs();
  }, []);

  function loadDogs() {
    setLoading(true);
    setDogs([]);
    let count = breedsCount;
    axios
      .get("https://dog.ceo/api/breeds/list/all")
      .then((response) => {
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
      })
      .finally(() => {
        setLoading(false);
      });
  }

  function handleSearchChange(newSearchText) {
    setSearchText(newSearchText);
  }

  let dogsCard;
  if (dogs) {
    dogsCard = dogs
      .filter((dog) => {
        return dog.breedName.toLowerCase().includes(searchText.toLowerCase());
      })
      .map((dog, index) => (
        <Link to={`/Breeds/${dog.breedName}`}>
          <DogCard key={index} breed={dog.breedName} image={dog.image} />
        </Link>
      ));
  }

  return (
    <div className="p-breeds">
      <Header />
      <Container>
        <div className="head-page">
          <SearchBox
            placeholder="Search..."
            searchText={searchText}
            onSearchChange={handleSearchChange}
          />
          <Button onClick={() => loadDogs()}>Update Images</Button>
        </div>
        <Masonry
          breakpointCols={3}
          className="my-masonry-grid"
          columnClassName="my-masonry-grid_column"
        >
          {dogs.length === breedsCount && dogsCard}
        </Masonry>
        {isLoading && <Spinner animation="grow" />}
      </Container>
    </div>
  );
}

export default Breeds;
