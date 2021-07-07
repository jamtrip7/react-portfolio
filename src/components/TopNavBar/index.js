import React from "react";
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import './index.css'

export default function TopNavbar() {
  return (
      <Navbar bg="dark" variant="dark" className="bg-transparent NavBar">
        <Nav.Link href="#home">Jamie Rippee</Nav.Link>
        <Nav className="ml-auto">
          <Nav.Link href="#About" style={{marginRight: "25px"}}>About Me</Nav.Link>
          <Nav.Link href="#Portfolio" style={{marginRight: "25px"}}>Portfolio</Nav.Link>
          <Nav.Link href="#Resume" style={{marginRight: "15px"}}>Resume</Nav.Link>
        </Nav>
      </Navbar>
  );
}

