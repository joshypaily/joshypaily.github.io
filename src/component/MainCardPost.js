import * as React from "react";
import PropTypes from "prop-types";
// import Paper from "@mui/material/Paper";
import { Card } from 'react-bootstrap';

// import Typography from "@mui/material/Typography";
// import Grid from "@mui/material/Grid2";
import { Container, Row, Col } from 'react-bootstrap';
// import Box from "@mui/material/Box";

function MainCardPost(props) {
  const { post: card } = props;

  let leftImageSection;
  if (card.isLeftImageRequired) {
    leftImageSection = (
      <Container>
        <div  className="g-{card.leftMd}">
          <Col md={card.leftMd}> 
            <img
          srcSet={card.leftImageSrcSet}
          src={card.leftImageSrc}
          style={{ maxWidth: "100%" }}
          loading="lazy"/>
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
      <div
        sx={{
          position: "absolute",
          top: 0,
          bottom: 0,
          right: 0,
          left: 0,
          backgroundColor: "rgba(0,0,0,.3)"
        }}
      />
      <div>
        {/* if (card.isLeftImageRequired) {
          <Grid md={card.leftMd}>
            <img
                    srcSet={card.leftImageSrcSet}
                    src={card.leftImageSrc}
                    style={{maxWidth : '100%'}}
                    loading="lazy"
                  />
          </Grid>
        } */}
        {leftImageSection}
        <div md={card.rightMd}>
          <div
            sx={{
              position: "relative",
              p: { xs: 3, md: 6 },
              pr: { md: 0 }
            }}
          >
            <div component="h5" variant="h4" color="inherit" >
              {card.title}
            </div>
            <div variant="h6" color="inherit">
              {card.description}
            </div>
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

// <Box sx={{ width: 500 }}>
// <BottomNavigation
//   showLabels
//   value={value}
//   onChange={(event, newValue) => {
//     setValue(newValue);
//   }}
// >
//   <BottomNavigationAction label="Recents" icon={<RestoreIcon />} />
//   <BottomNavigationAction label="Favorites" icon={<FavoriteIcon />} />
//   <BottomNavigationAction label="Nearby" icon={<LocationOnIcon />} />
// </BottomNavigation>
// </Box>
