import React from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import "../Styles/Home.css";

function Home(props) {
  return (
    <div className="p-home">
      <h1>Dogs Book</h1>
      <h4>Man's Best Friend</h4>
      <Link to="/Gallery">
        <Button>Woof!</Button>
      </Link>
    </div>
  );
}

export default Home;
