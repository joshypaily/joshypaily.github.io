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
        {/* <Grid container direction="column" justifyContent="center" alignItems="center">
          Java
        </Grid>
        <Grid container direction="column" justifyContent="center" alignItems="center">
          Kotlin
        </Grid>
        <Grid container direction="column" justifyContent="center" alignItems="center">
          HTML
        </Grid>
        <Grid container direction="column" justifyContent="center" alignItems="center">
          CSS
        </Grid>
        <Grid container direction="column" justifyContent="center" alignItems="center">
          JavaScript
        </Grid> */}
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
        {/* <Grid container direction="column" justifyContent="center" alignItems="center">
          Spring Boot
        </Grid>
        <Grid container direction="column" justifyContent="center" alignItems="center">
          Spring MVC
        </Grid> */}
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
        {/* <Grid container direction="column" justifyContent="center" alignItems="center">
          MySQL DB
        </Grid>
        <Grid container direction="column" justifyContent="center" alignItems="center">
          MongoDB
        </Grid> */}
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
        {/* <Grid container direction="column" justifyContent="center" alignItems="center">
          Ubuntu
        </Grid>
        <Grid container direction="column" justifyContent="center" alignItems="center">
          MacOS
        </Grid>
        <Grid container direction="column" justifyContent="center" alignItems="center">
          WindowS
        </Grid> */}
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
        {/* <Grid container direction="column" justifyContent="center" alignItems="center">
          Microservice
        </Grid>
        <Grid container direction="column" justifyContent="center" alignItems="center">
          AWS EC2
        </Grid>
        <Grid container direction="column" justifyContent="center" alignItems="center">
          Docker
        </Grid>
        <Grid container direction="column" justifyContent="center" alignItems="center">
          Git
        </Grid>
        <Grid container direction="column" justifyContent="center" alignItems="center">
          GRPC
        </Grid>
        <Grid container direction="column" justifyContent="center" alignItems="center">
          REST API
        </Grid>
        <Grid container direction="column" justifyContent="center" alignItems="center">
          Splunk
        </Grid>
        <Grid container direction="column" justifyContent="center" alignItems="center">
          Apache ActiveMQ
        </Grid>
        <Grid container direction="column" justifyContent="center" alignItems="center">
          GraphQL
        </Grid>
        <Grid container direction="column" justifyContent="center" alignItems="center">
          Web hosting(PHP and Java)
        </Grid> */}
        <Chip color="primary" label="Microservice" />
        <Chip color="primary" label="AWS EC2" />
        <Chip color="primary" label="Docker" />
        <Chip color="primary" label="Git" />
        <Chip color="primary" label="GRPC" />
        <Chip color="primary" label="REST API" />
        <Chip color="primary" label="Splunk" />
        <Chip color="primary" label="Apache ActiveMQ" />
        <Chip color="primary" label="GraphQL" />
        <Chip color="primary" label="Web hosting(PHP and Java)" />
      </Stack>
    </Container>
  );
}
