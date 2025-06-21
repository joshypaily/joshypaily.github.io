import React from "react";
import { Container } from "react-bootstrap";

export default function Footer() {
  return (
    <footer className="bg-dark text-light py-3 mt-auto">
      <Container className="text-center">
        <small>
          &copy; {new Date().getFullYear()} &nbsp;
          <a
            href="https://mui.com/"
            className="text-info text-decoration-none"
            target="_blank"
            rel="noopener noreferrer"
          >
            Sitemark
          </a>
        </small>
      </Container>
    </footer>
  );
}
