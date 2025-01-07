"use client";
import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Container from "@mui/material/Container";
import AppAppBar from "./blog/components/AppAppBar";
import MainContent from "./blog/components/MainContent";
import Latest from "./blog/components/Latest";

import AppTheme from "./shared-theme/AppTheme";

export default function Blog() {
  return (
    <Container
      maxWidth="lg"
      component="main"
      sx={{ display: "flex", flexDirection: "column", my: 16, gap: 4 }}>
      <MainContent />
      <Latest />
    </Container>
  );
}
