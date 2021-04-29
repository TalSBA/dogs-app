import React from "react";
import "../Styles/Header.css";
import { FaDog } from "react-icons/fa";
import Menu from "../Components/Menu";
import { SiDatadog } from "react-icons/si";

function Header(props) {
  return (
    <div className="c-header">
      <SiDatadog className="icon" fontSize="48px"/>
      {/* <FaDog className="icon" fontSize="48px" /> */}
      <h1>Dogs Book</h1>
      <h4>Man's Best Friend</h4>
      {/* <Link to="/Breeds">
        <Button>Woof!</Button>
      </Link> */}
      <Menu items={["Home", "Breeds"]} />
    </div>
  );
}

export default Header;
