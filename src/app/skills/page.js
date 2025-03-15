import * as React from "react";
import Stack from "@mui/material/Stack";
import { Box, Divider } from "@mui/joy";
import Chip from "@mui/material/Chip";
import Container from "@mui/material/Container";

export default function SvgIconsColor() {
  return (
    <Container
      maxWidth="lg"
      component="main"
      sx={{ display: "flex", flexDirection: "column", my: 16, gap: 4 }}>
      <Box fontcolor="inherit" sx={{ p: 1, border: "1px dashed grey" }}>
        Technologies known
      </Box>
      <Stack
        direction="row"
        spacing={{ xs: 1, sm: 2, md: 4 }}
        divider={<Divider orientation="vertical" flexItem />}
        useFlexGap
        flexWrap="wrap"
        padding={2}>
        <Chip color="primary" label="Java" />
        <Chip color="primary" label="Kotlin" />
        <Chip color="primary" label="HTML" />
        <Chip color="primary" label="CSS" />
        <Chip color="primary" label="JavaScript" />
      </Stack>

      <Box fontcolor="inherit" sx={{ p: 1, border: "1px dashed grey" }}>
        Frameworks
      </Box>
      <Stack
        direction="row"
        spacing={{ xs: 1, sm: 2, md: 4 }}
        divider={<Divider orientation="vertical" flexItem />}
        useFlexGap
        flexWrap="wrap"
        padding={2}>
        <Chip color="primary" label="Spring Boot" />
        <Chip color="primary" label="Spring MVC" />
      </Stack>
      <Box fontcolor="inherit" sx={{ p: 1, border: "1px dashed grey" }}>
        Databases
      </Box>
      <Stack
        direction="row"
        spacing={{ xs: 1, sm: 2, md: 4 }}
        divider={<Divider orientation="vertical" flexItem />}
        useFlexGap
        flexWrap="wrap"
        padding={2}>
        <Chip color="primary" label="MySQL DB" />
        <Chip color="primary" label="MongoDB" />
      </Stack>
      <Box fontcolor="inherit" sx={{ p: 1, border: "1px dashed grey" }}>
        Platforms
      </Box>
      <Stack
        direction="row"
        spacing={{ xs: 1, sm: 2, md: 4 }}
        divider={<Divider orientation="vertical" flexItem />}
        useFlexGap
        flexWrap="wrap"
        padding={2}>
        <Chip color="primary" label="Ubuntu" />
        <Chip color="primary" label="MacOS" />
        <Chip color="primary" label="Windows" />
      </Stack>
      <Box fontcolor="inherit" sx={{ p: 1, border: "1px dashed grey" }}>
        Other
      </Box>

      <Stack
        direction="row"
        spacing={{ xs: 1, sm: 2, md: 4 }}
        divider={<Divider orientation="vertical" flexItem />}
        useFlexGap
        flexWrap="wrap"
        padding={2}>
        <Chip color="primary" label="Microservice" />
        <Chip color="primary" label="AWS EC2,ECS" />
        <Chip color="primary" label="Docker" />
        <Chip color="primary" label="Git" />
        <Chip color="primary" label="GRPC" />
        <Chip color="primary" label="REST API" />
        <Chip color="primary" label="Splunk" />
        <Chip color="primary" label="Apache ActiveMQ" />
        <Chip color="primary" label="GraphQL" />
        <Chip color="primary" label="Web hosting(PHP and Java)" />
        <Chip color="primary" label="Kafka" />
      </Stack>
      {/* <Grid item xs={12} md={6}>
          <Typography sx={{ mt: 4, mb: 2 }} variant="h6" component="div">
            Icon with text
          </Typography>
          <Demo>
            <List dense={dense}>
              {generate(
                <ListItem>
                  <ListItemIcon>
                    <FolderIcon />
                  </ListItemIcon>
                  <ListItemText
                    primary="Single-line item"
                    secondary={secondary ? 'Secondary text' : null}
                  />
                </ListItem>,
              )}
            </List>
          </Demo>
        </Grid>
      </Grid> */}
    </Container>
  );
}
