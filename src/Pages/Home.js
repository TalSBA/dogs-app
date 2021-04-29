import React from "react";
import "../Styles/Home.css";
import Header from "../Components/Header";
import dogImg from "../Styles/dog.png";
import { Col, Container, Row } from "react-bootstrap";

function Home(props) {
  return (
    <div className="p-home">
      <Header />
      <div className="home-img">
        <Row>
          <Col>
            <h1>
              Think <br /> P<img src={dogImg}></img>wsitive!
            </h1>
          </Col>
        </Row>
      </div>
    </div>
  );
}

export default Home;
