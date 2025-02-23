"use client";

import { Inter } from "next/font/google";
import "./globals.css";
import { Container } from "@mui/joy";
import CssBaseline from "@mui/material/CssBaseline";
import AppAppBar from "./blog/components/AppAppBar";
import AppTheme from "./shared-theme/AppTheme";
import Footer from "./blog/components/Footer";
import PropTypes from "prop-types";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children, ...props }) {
  return (
    <html lang="en">
      <head>
        <title>Joshy&apos;s-portfolio</title>
      </head>
      <body className={inter.className}>
        <AppTheme {...props}>
          <CssBaseline enableColorScheme />
          <AppAppBar />
          <Container maxWidth="lg">{children}</Container>
          <Footer />
        </AppTheme>
      </body>
    </html>
  );
}

RootLayout.propTypes = {
  children: PropTypes.node.isRequired,
  props: PropTypes.object
};
