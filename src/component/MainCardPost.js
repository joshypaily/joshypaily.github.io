import * as React from "react";
import PropTypes from "prop-types";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";

function MainCardPost(props) {
  const { post: card } = props;

  let leftSection;
  if (card.isLeftImageRequired) {
    leftSection = (
      <Grid item md={card.leftMd}>
        <img
          srcSet={card.leftImageSrcSet}
          src={card.leftImageSrc}
          style={{ maxWidth: "100%" }}
          loading="lazy"
        />
      </Grid>
    );
  }

  return (
    <Paper
      sx={{
        position: "relative",
        backgroundColor: "grey.800",
        color: "#fff",
        mb: 4,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundImage: `url(${card.backgroundImage})`
      }}>
      {/* Increase the priority of the hero background image */}
      {<img style={{ display: "none" }} src={card.backgroundImage} />}
      <Box
        sx={{
          position: "absolute",
          top: 0,
          bottom: 0,
          right: 0,
          left: 0,
          backgroundColor: "rgba(0,0,0,.3)"
        }}
      />
      <Grid container>
        {/* if (card.isLeftImageRequired) {
          <Grid item md={card.leftMd}>
            <img
                    srcSet={card.leftImageSrcSet}
                    src={card.leftImageSrc}
                    style={{maxWidth : '100%'}}
                    loading="lazy"
                  />
          </Grid>
        } */}
        {leftSection}
        <Grid item md={card.rightMd}>
          <Box
            sx={{
              position: "relative",
              p: { xs: 3, md: 6 },
              pr: { md: 0 }
            }}>
            <Typography component="h5" variant="h4" color="inherit" gutterBottom>
              {card.title}
            </Typography>
            <Typography variant="h6" color="inherit" paragraph>
              {card.description}
            </Typography>
            {/* <Link variant="subtitle1" href="#">
              {post.linkText}
            </Link> */}
          </Box>
        </Grid>
      </Grid>
    </Paper>
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
