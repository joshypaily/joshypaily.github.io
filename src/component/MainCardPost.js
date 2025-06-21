import * as React from "react";
import PropTypes from "prop-types";
import { Card } from "react-bootstrap";

import { Container, Col } from "react-bootstrap";

function MainCardPost(props) {
  const { post: card } = props;

  let leftImageSection;
  if (card.isLeftImageRequired) {
    leftImageSection = (
      <Container>
        <div className="g-{card.leftMd}">
          <Col md={card.leftMd}>
            <img
              srcSet={card.leftImageSrcSet}
              src={card.leftImageSrc}
              style={{ maxWidth: "100%" }}
              loading="lazy"
            />
          </Col>
        </div>
      </Container>
    );
  }

  return (
    <Card
      sx={{
        position: "relative",
        backgroundColor: "grey.800",
        color: "#fff",
        mb: 4,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundImage: `url(${card.backgroundImage})`
      }}
    >
      {/* Increase the priority of the hero background image */}
      {<img style={{ display: "none" }} src={card.backgroundImage} />}
      <div>
        {leftImageSection}
        <div>
          <div>
            <div color="inherit">{card.title}</div>
            <div color="inherit">{card.description}</div>
          </div>
        </div>
      </div>
    </Card>
  );
}

MainCardPost.propTypes = {
  post: PropTypes.shape({
    description: PropTypes.string.isRequired,
    backgroundImage: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    leftImageSrcSet: PropTypes.string,
    leftImageSrc: PropTypes.string,
    isLeftImageRequired: PropTypes.bool,
    leftMd: PropTypes.number,
    rightMd: PropTypes.number
  }).isRequired
};

export default MainCardPost;