import React, { useState } from "react";
import { Button, Container } from "react-bootstrap";
import SearchBox from "../Components/SearchBox";
import "../Styles/Gallery.css";

function Gallery(props) {
  const [searchText, setSearchText] = useState("");
  function handleSearchChange() {}
  return (
    <Container className="p-gallery">
      <div className="head-page">
        <SearchBox
          placeholder="Search..."
          searchText={searchText}
          onSearchChange={handleSearchChange}
        />
        <Button>Update Images</Button>
      </div>
    </Container>
  );
}

export default Gallery;
