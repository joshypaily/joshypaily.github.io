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
      <Box fontcolor="inherit">Technologies known</Box>
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
          <StorageIcon color="primary" fontSize="large" />
          SQL
        </Grid>
        <Grid container direction="column" justifyContent="center" alignItems="center">
          <CodeIcon color="primary" fontSize="large" />
          HTML
        </Grid>
        <Grid container direction="column" justifyContent="center" alignItems="center">
          <JavascriptIcon color="primary" fontSize="large" />
          JavaScript
        </Grid>
        <Grid container direction="column" justifyContent="center" alignItems="center">
          <CssIcon color="primary" fontSize="large" />
          CSS
        </Grid>
      </Stack>
      <Box fontcolor="inherit">Development inprogress. Stay tuned..</Box>
    </>
  );
}
