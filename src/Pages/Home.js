import React from "react";
import "../Styles/Home.css";
import Header from "../Components/Header";
import dogImg from "../Styles/dog.png";
import { Container } from "react-bootstrap";

function Home(props) {
  return (
    <div className="p-home">
      <Header />
      <Container fluid>
        <div className="home-img">
          <h1>
            Think <br /> P<img src={dogImg}></img>wsitive!
          </h1>
        </div>
      </Container>
    </div>
  );
}

export default Home;
