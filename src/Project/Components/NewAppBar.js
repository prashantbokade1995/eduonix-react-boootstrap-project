import React from "react";
import { NavbarBrand, InputGroup, FormControl } from "react-bootstrap";
// import { FormControl, NavbarBrand, NavLink, InputGroup } from 'react-bootstrap'
import Container from "react-bootstrap/Container";
import NavbarCollapse from "react-bootstrap/esm/NavbarCollapse";
import NavbarToggle from "react-bootstrap/esm/NavbarToggle";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { CgProfile } from "react-icons/cg";
import { VscBell } from "react-icons/vsc";
import { CgSearch } from "react-icons/cg";

const NewAppBar = () => {
  return (
    <>
      <Navbar bg="light" variant="light">
        <Container fluid>
          <NavbarBrand href="#home">
            <img
              alt=""
              src="https://media-exp1.licdn.com/dms/image/C511BAQE1NaQLmyGLlw/company-background_10000/0/1560411660501?e=2147483647&v=beta&t=VPlj9xmyaLwmdgMvEH746x_HkoIVdCU6dC1WLTLUIiM"
              height="30"
              className="d-inline-block align-top"
            />{" "}
          </NavbarBrand>

          <NavbarToggle aria-controls="navbarScroll" />
          <NavbarCollapse id="navbarScroll">
            <Nav className="me-auto my-2 my-lg-0" navbarScroll>
              <NavDropdown title="Explore" id="navbarScrollingDropdown">
                <NavDropdown.Item href="#action3">Home</NavDropdown.Item>
                <NavDropdown.Item href="#action4">About</NavDropdown.Item>
                <NavDropdown.Item href="#action5">Contact Us</NavDropdown.Item>
              </NavDropdown>
            </Nav>

            <InputGroup className="container-fluid mt-1">
              <FormControl
                placeholder="Search Text"
                aria-label="Search Text"
                aria-describedby="basic-addon2"
              />
              <InputGroup.Text>
                <CgSearch className="m-1" />
              </InputGroup.Text>
            </InputGroup>
          </NavbarCollapse>
          <VscBell className="m-3" />
          <AiOutlineShoppingCart className="m-2" />
          <CgProfile className="m-2" />
        </Container>
      </Navbar>
    </>
  );
};

export default NewAppBar;
