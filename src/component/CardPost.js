import * as React from "react";
import PropTypes from "prop-types";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardActionArea from "@mui/material/CardActionArea";
import CardContent from "@mui/material/CardContent";
import List from "@mui/material/List";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import { ListItem, ListItemButton, ListItemIcon, ListItemText } from "@mui/material";
import StarIcon from "@mui/icons-material/Star";

function CardPost(props) {
  const { post: card } = props;

  return (
    <Grid item xs={12}>
      <CardActionArea component="a" href="#">
        <Card sx={{ display: "flex" }}>
          <CardContent sx={{ flex: 1 }}>
            <Typography component="h2" variant="h5">
              {card.title}
            </Typography>
            <Typography variant="subtitle1" color="text.secondary">
              {card.subTitle}
            </Typography>
            <List>
              {card.description.map((description) => (
                <ListItem disablePadding sx={{ display: "list-item" }} key="l">
                  <ListItemButton>
                    <ListItemIcon>
                      <StarIcon />
                    </ListItemIcon>
                    <ListItemText primary={description} />
                  </ListItemButton>
                </ListItem>
              ))}
            </List>
            {/* <Typography variant="subtitle1" paragraph>
              {card.description}
            </Typography> */}
            {/* <Typography variant="subtitle1" color="primary">
              Continue reading...
            </Typography> */}
          </CardContent>
          {/* <CardMedia
            component="img"
            sx={{ width: 160, display: { xs: 'none', sm: 'block' } }}
            image={card.image}
            alt={card.imageLabel}
          /> */}
        </Card>
      </CardActionArea>
    </Grid>
  );
}

CardPost.propTypes = {
  post: PropTypes.shape({
    subTitle: PropTypes.string.isRequired,
    description: PropTypes.array.isRequired,
    backgroundImage: PropTypes.string.isRequired,
    //imageLabel: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired
  }).isRequired
};

export default CardPost;
