"use client";

import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useState, useEffect } from 'react';
import WiMoonAltFirstQuarter from "react-icons/wi";
import { FaMoon } from "react-icons/fa";


const navItemColour = "";

const sections = [
  { title: "About", url: "/", colour: navItemColour },
  { title: "Experience", url: "/experience", colour: navItemColour },
  { title: "Projects", url: "/projects", colour: navItemColour },
  { title: "Skills", url: "/skills", colour: navItemColour },
  { title: "Achievements", url: "/achievements", colour: navItemColour },
  { title: "Education", url: "/education", colour: navItemColour },
  { title: "Contact", url: "/contact", colour: navItemColour }
];

export default function AppAppBar() {

  for (let i = 0; i < sections.length; i++) {
    if (sections[i].url === usePathname()) {
      sections[i].colour = "white";
    } else {
      sections[i].colour = navItemColour;
    }
  }
  const [theme, setTheme] = useState('light');

  // Load saved theme from localStorage on mount
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') || 'light';
    setTheme(savedTheme);
    document.body.className = savedTheme === 'dark' ? 'bg-dark text-light' : 'bg-light text-dark';
  }, []);

  // Toggle between light and dark
  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
    document.body.className = newTheme === 'dark' ? 'bg-dark text-light' : 'bg-light text-dark';
  };

  return (
    <Navbar expand="lg" className="bg-body-tertiary" data-bs-theme="dark">
      <Container fluid>
        <Navbar.Brand href="#">Joshy's Portfolio</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            {sections.map((page) => (
              <Link key={"l"+page.title} href={page.url} passHref legacyBehavior>
                <Nav.Link as="a" key={page.title} style={{ color: page.colour }}>
                  {page.title}
                </Nav.Link>
              </Link>
            ))}
          </Nav>
          <Nav>

          </Nav>

          <Nav.Link onClick={toggleTheme}  className="text-white">
            <FaMoon className="me-2" />
            
          </Nav.Link>
           
          
          {/* <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form> */}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

  //  <div className="container py-5">
  //         <button onClick={toggleTheme} className="btn btn-outline-primary mb-4">
  //           Switch to {theme === 'light' ? 'Dark' : 'Light'} Mode
  //         </button>

  //         <h1>Hello, Bootstrap in {theme} mode!</h1>
  //         <p>This text and background color change based on the selected theme.</p>
  //       </div>