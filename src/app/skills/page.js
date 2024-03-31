import * as React from "react";
import Stack from "@mui/material/Stack";
import CssIcon from "@mui/icons-material/Css";
import JavascriptIcon from "@mui/icons-material/Javascript";
import CodeIcon from "@mui/icons-material/Code";
import StorageIcon from "@mui/icons-material/Storage";
import { Box, Grid, Divider } from "@mui/joy";

export default function SvgIconsColor() {
  return (
    <>
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
        <Grid container direction="column" justifyContent="center" alignItems="center">
          <CodeIcon color="primary" fontSize="large" />
          Java
        </Grid>
        <Grid container direction="column" justifyContent="center" alignItems="center">
          <CodeIcon color="primary" fontSize="large" />
          Kotlin
        </Grid>
        <Grid container direction="column" justifyContent="center" alignItems="center">
          <CodeIcon color="primary" fontSize="large" />
          HTML
        </Grid>
        <Grid container direction="column" justifyContent="center" alignItems="center">
          <CssIcon color="primary" fontSize="large" />
          CSS
        </Grid>
        <Grid container direction="column" justifyContent="center" alignItems="center">
          <JavascriptIcon color="primary" fontSize="large" />
          JavaScript
        </Grid>
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
        <Grid container direction="column" justifyContent="center" alignItems="center">
          <CodeIcon color="primary" fontSize="large" />
          Spring Boot
        </Grid>
        <Grid container direction="column" justifyContent="center" alignItems="center">
          <CodeIcon color="primary" fontSize="large" />
          Spring MVC
        </Grid>
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
        <Grid container direction="column" justifyContent="center" alignItems="center">
          <StorageIcon color="primary" fontSize="large" />
          MySQL DB
        </Grid>
        <Grid container direction="column" justifyContent="center" alignItems="center">
          <StorageIcon color="primary" fontSize="large" />
          MongoDB
        </Grid>
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
        <Grid container direction="column" justifyContent="center" alignItems="center">
          <CodeIcon color="primary" fontSize="large" />
          Ubuntu
        </Grid>
        <Grid container direction="column" justifyContent="center" alignItems="center">
          <CodeIcon color="primary" fontSize="large" />
          MacOS
        </Grid>
        <Grid container direction="column" justifyContent="center" alignItems="center">
          <CodeIcon color="primary" fontSize="large" />
          WindowS
        </Grid>
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
        <Grid container direction="column" justifyContent="center" alignItems="center">
          <CodeIcon color="primary" fontSize="large" />
          Microservice
        </Grid>
        <Grid container direction="column" justifyContent="center" alignItems="center">
          <CodeIcon color="primary" fontSize="large" />
          Web hosting (PHP and Java),
        </Grid>
        <Grid container direction="column" justifyContent="center" alignItems="center">
          <CodeIcon color="primary" fontSize="large" />
          AWS EC2
        </Grid>
        <Grid container direction="column" justifyContent="center" alignItems="center">
          <CodeIcon color="primary" fontSize="large" />
          Docker
        </Grid>
        <Grid container direction="column" justifyContent="center" alignItems="center">
          <CodeIcon color="primary" fontSize="large" />
          Git
        </Grid>
        <Grid container direction="column" justifyContent="center" alignItems="center">
          <CodeIcon color="primary" fontSize="large" />
          GRPC
        </Grid>
        <Grid container direction="column" justifyContent="center" alignItems="center">
          <CodeIcon color="primary" fontSize="large" />
          REST API
        </Grid>
        <Grid container direction="column" justifyContent="center" alignItems="center">
          <CodeIcon color="primary" fontSize="large" />
          Splunk
        </Grid>
        <Grid container direction="column" justifyContent="center" alignItems="center">
          <CodeIcon color="primary" fontSize="large" />
          Apache ActiveMQ
        </Grid>
        <Grid container direction="column" justifyContent="center" alignItems="center">
          <CodeIcon color="primary" fontSize="large" />
          GraphQL
        </Grid>
      </Stack>
    </>
  );
}
