"use client";


import { Container, ListGroup, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
// import FaLinkedin from 'react-icons/fa';
import { FaLinkedin } from 'react-icons/fa';

export default function SvgIconsColor() {
  return (
    <Container
      component="main"
      sx={{ display: "flex", flexDirection: "column", my: 16, gap: 4 }}
    >
      <div container spacing={2}>
        <div size={{ xs: 12, md: 6 }}>
          <div sx={{ mt: 4, mb: 2 }} variant="h6" component="div">
            Contact
          </div>
          <ListGroup>
            <ListGroup.Item>
              <FaLinkedin />:
              <Card.Link href="https://www.linkedin.com/in/joshypaily/" target="_blank" >
                {"https://www.linkedin.com/in/joshypaily"}
              </Card.Link>
            </ListGroup.Item>
          </ListGroup>
        </div>
      </div>
    </Container>
  );
}
