import * as React from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Link from "@mui/material/Link";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

export default function SvgIconsColor() {
  return (
    <>
      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
          <Typography sx={{ mt: 4, mb: 2 }} variant="h6" component="div">
            Contact
          </Typography>
          <List>
            <ListItem>
              <LinkedInIcon color="primary" fontSize="large" />:
              <Link href="https://www.linkedin.com/in/joshypaily/" target="_blank" variant="body2">
                {"https://www.linkedin.com/in/joshypaily"}
              </Link>
            </ListItem>
          </List>
        </Grid>
      </Grid>
    </>
  );
}
