import * as React from "react";
import Grid from "@mui/material/Grid2";
import Typography from "@mui/material/Typography";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Link from "@mui/material/Link";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { Container } from "@mui/material";

export default function SvgIconsColor() {
  return (
    <Container
      maxWidth="lg"
      component="main"
      sx={{ display: "flex", flexDirection: "column", my: 16, gap: 4 }}
    >
      <Grid container spacing={2}>
        <Grid size={{ xs: 12, md: 6 }}>
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
    </Container>
  );
}
