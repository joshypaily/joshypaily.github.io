"use client";

import { Container, Row, Col, Card, ListGroup } from "react-bootstrap";
import { FaLinkedin, FaGithub } from "react-icons/fa";

export default function ContactPage() {
  return (
    <Container as="main" className="py-5" style={{ minHeight: "70vh" }}>
      <Row className="justify-content-center mb-5">
        <Col xs={12} md={8} lg={6}>
          <Card className="shadow-lg border-0">
            <Card.Body className="text-center p-5">
              <Card.Title as="h2" className="mb-4" style={{ fontWeight: 700, fontSize: "2rem" }}>
                Contact Me
              </Card.Title>
              <Card.Text className="mb-4" style={{ color: "#555" }}>
                Feel free to reach out for collaboration, project inquiries, or just to connect!
              </Card.Text>
              <ListGroup variant="flush" className="mb-4">
                <ListGroup.Item className="d-flex align-items-center justify-content-center border-0 bg-transparent">
                  <FaLinkedin className="me-2 text-primary" size={22} />
                  <a
                    href="https://www.linkedin.com/in/joshypaily/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-decoration-none text-primary"
                  >
                    linkedin.com/in/joshypaily
                  </a>
                </ListGroup.Item>
                <ListGroup.Item className="d-flex align-items-center justify-content-center border-0 bg-transparent">
                  <FaGithub className="me-2 text-dark" size={22} />
                  <a
                    href="https://github.com/joshypaily"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-decoration-none text-dark"
                  >
                    github.com/joshypaily
                  </a>
                </ListGroup.Item>
              </ListGroup>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}
