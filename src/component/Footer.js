import React from "react";
import { Container } from "react-bootstrap";

export default function Footer() {
  return (
    <footer className="bg-dark text-light py-3 mt-auto">
      <Container className="text-center">
        <small>Joshy`&apos;s Portfolio &copy; {new Date().getFullYear()}</small>
      </Container>
    </footer>
  );
}
