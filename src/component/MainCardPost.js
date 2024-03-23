import * as React from 'react';
import PropTypes from 'prop-types';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';

function MainCardPost(props) {
  const { post } = props;

  return (
    <Paper
      sx={{
        position: 'relative',
        backgroundColor: 'grey.800',
        color: '#fff',
        mb: 4,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        backgroundImage: `url(${post.image})`,
      }}
    >
      {/* Increase the priority of the hero background image */}
      {<img style={{ display: 'none' }} src={post.image} alt={post.imageText} />}
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          bottom: 0,
          right: 0,
          left: 0,
          backgroundColor: 'rgba(0,0,0,.3)',
        }}
      />
      <Grid container>
        <Grid item md={4}>
        <img
                srcSet={`/joshy.jpeg?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                src={`/joshy.jpeg?w=164&h=164&fit=crop&auto=format`}
                style={{maxWidth : '100%'}}
                loading="lazy"
              />
        </Grid>
        <Grid item md={8}>
          <Box
            sx={{
              position: 'relative',
              p: { xs: 3, md: 6 },
              pr: { md: 0 },
            }}
          >
            <Typography component="h5" variant="h4" color="inherit" gutterBottom>
              {post.title}
            </Typography>
            <Typography variant="h6" color="inherit" paragraph>
              {post.description}
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
    image: PropTypes.string.isRequired,
    imageText: PropTypes.string.isRequired,
    linkText: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
  }).isRequired,
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