import React, { useState } from "react";
import { Nav, Navbar } from "react-bootstrap";
import { Redirect } from "react-router";
import { FaDog } from "react-icons/fa";
import "../Styles/Menu.css";

function Menu({ items }) {
  const [redirectTo, setRedirect] = useState();

  return !redirectTo ? (
    <div className="c-menu">
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="#/">
          <FaDog className="icon" fontSize="24px"/>
        </Navbar.Brand>
        <Nav className="mr-auto">
          {items.map((item) => {
            return (
              <Nav.Link href={`#/${item}`} >
                {item}
              </Nav.Link>
            );
          })}
        </Nav>
      </Navbar>
    </div>
  ) : (
    <Redirect to={redirectTo} />
  );
}

export default Menu;
