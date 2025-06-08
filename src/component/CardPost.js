import * as React from "react";
import PropTypes from "prop-types";
import { Col, Card, Button, ListGroup } from 'react-bootstrap';
import { FaStar } from 'react-icons/fa';

function CardPost(props) {
  const { post: card } = props;

  let linkSection;
  if (card.isMoreInfoLinkRequired) {
    linkSection = (
      <div variant="subtitle1" color="primary">
        <Card.Link href={card.moreInfoLink.url} underline="always" target="_blank">
          {card.moreInfoLink.label}
        </Card.Link>
      </div>
    );
  }

  return (

    <Col xs={12}>
      <Card className="d-flex flex-row mb-3">
        <Card.Body className="flex-grow-1">
          <Card.Title as="h2" className="h5">
            {card.title}
          </Card.Title>
          <Card.Subtitle className="mb-2 text-muted">
            {card.subTitle}
          </Card.Subtitle>

          <ListGroup variant="flush">
            {card.description.map((description, i) => (
              <ListGroup.Item
                key={'des' + i + card.key}
                className="d-flex align-items-start"
              >
                <span className="me-2 mt-1 text-warning">
                  <FaStar />
                </span>
                {description}
              </ListGroup.Item>
            ))}
          </ListGroup>
          {linkSection}
        </Card.Body>
      </Card>
    </Col>

  );
}

CardPost.propTypes = {
  post: PropTypes.shape({
    subTitle: PropTypes.string.isRequired,
    description: PropTypes.array.isRequired,
    backgroundImage: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    key: PropTypes.string.isRequired,
    isMoreInfoLinkRequired: PropTypes.string.isRequired,
    moreInfoLink: PropTypes.shape({
      url: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired
    }).isRequired
  }).isRequired
};

export default CardPost;
