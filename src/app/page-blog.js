"use client";
import * as React from "react";
import Container from "@mui/material/Container";
import MainContent from "./blog/components/MainContent";
import Latest from "./blog/components/Latest";

export default function Blog() {
  return (
    <Container
      maxWidth="lg"
      component="main"
      sx={{ display: "flex", flexDirection: "column", my: 16, gap: 4 }}
    >
      <MainContent />
      <Latest />
    </Container>
  );
}
