import * as React from "react";
import PropTypes from "prop-types";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid2";
import Card from "@mui/material/Card";
import CardActionArea from "@mui/material/CardActionArea";
import CardContent from "@mui/material/CardContent";
import List from "@mui/material/List";
import { ListItem, ListItemButton, ListItemIcon, ListItemText } from "@mui/material";
import StarIcon from "@mui/icons-material/Star";
import Link from "@mui/material/Link";

function CardPost(props) {
  const { post: card } = props;

  let linkSection;
  if (card.isMoreInfoLinkRequired) {
    linkSection = (
      <Typography variant="subtitle1" color="primary">
        <Link href={card.moreInfoLink.url} underline="always" target="_blank">
          {card.moreInfoLink.label}
        </Link>
      </Typography>
    );
  }

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
              {card.description.map((description, i) => (
                <ListItem disablePadding sx={{ display: "list-item" }} key={"des" + i + card.key}>
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
            {linkSection}
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
