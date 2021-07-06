import React from "react";
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import './index.css'

export default function TopNavbar() {
  return (
      <Navbar bg="dark" variant="dark" className="bg-transparent NavBar" >
        <Nav.Link href="#home">Jamie Rippee</Nav.Link>
        <Nav className="ml-auto">
          <Nav.Link href="#About">About Me</Nav.Link>
          <Nav.Link href="#Portfolio">Portfolio</Nav.Link>
          <Nav.Link href="#Resume">Resume</Nav.Link>
        </Nav>
      </Navbar>
  );
}

