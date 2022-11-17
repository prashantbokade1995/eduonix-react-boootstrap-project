import React from "react";
import './Header.css'
import { NavbarBrand, InputGroup, FormControl, NavLink, Button } from "react-bootstrap";
// import { FormControl, NavbarBrand, NavLink, InputGroup } from 'react-bootstrap'
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { VscBell } from "react-icons/vsc";

const HeaderBar = () => {
  return (
    <>
      <Navbar bg="light" variant="white">
          <NavbarBrand href="/TopStory">
            <img
              alt=""
              src="https://w7.pngwing.com/pngs/776/349/png-transparent-television-channel-captain-news-tamil-sun-tv-news-miscellaneous-television-trademark.png"
              width="60"
              className="d-inline-block align-top"
            />{" "}
          </NavbarBrand>
          <Nav className="me-auto">
          <NavLink href="/TopStory">TopStory</NavLink>
          <NavLink href="/NewStory">NewStory</NavLink>
          <NavLink href="/BestTopStory">BestTopStory</NavLink>
          </Nav>
            <InputGroup className="d-flex">
            <FormControl
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <Button variant="outline-success me-5">Search</Button>
          </InputGroup>
          <div  className="m-3"><VscBell/></div>
      </Navbar>
    </>
  );
};

export default HeaderBar;
