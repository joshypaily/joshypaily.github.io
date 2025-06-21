"use client";

import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useState, useEffect } from "react";
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
  const [theme, setTheme] = useState("light");

  // Load saved theme from localStorage on mount
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") || "light";
    setTheme(savedTheme);
    document.body.className = savedTheme === "dark" ? "bg-dark text-light" : "bg-light text-dark";
  }, []);

  // Toggle between light and dark
  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
    document.body.className = newTheme === "dark" ? "bg-dark text-light" : "bg-light text-dark";
  };

  return (
    <Navbar expand="lg" className="bg-body-tertiary" data-bs-theme="dark">
      <Container fluid>
        <Navbar.Brand href="#">Joshy&apos;s Portfolio</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav className="me-auto my-2 my-lg-0" style={{ maxHeight: "100px" }} navbarScroll>
            {sections.map((page) => (
              <Link key={"l" + page.title} href={page.url} passHref legacyBehavior>
                <Nav.Link as="a" key={page.title} style={{ color: page.colour }}>
                  {page.title}
                </Nav.Link>
              </Link>
            ))}
          </Nav>
          <Nav></Nav>
          <Nav.Link onClick={toggleTheme} className="text-white">
            <FaMoon className="me-2" />
          </Nav.Link>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}