"use client";

import { Inter } from "next/font/google";
import "./globals.css";
import Container from "react-bootstrap/Container";
import AppNavBar from "@/component/AppNavBar";
import Footer from "@/component/Footer";
import PropTypes from "prop-types";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <title>Joshy&apos;s-portfolio</title>
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.5/dist/css/bootstrap.min.css"
          integrity="sha384-SgOJa3DmI69IUzQ2PVdRZhwQ+dy64/BUtbMJw1MZ8t5HZApcHrRKUc4W0kG879m7"
          crossOrigin="anonymous"
        />
      </head>
      <body
        className={inter.className}
        style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}
      >
        <AppNavBar />
        <Container style={{ flex: 1 }}>{children}</Container>
        <Footer />
      </body>
    </html>
  );
}

RootLayout.propTypes = {
  children: PropTypes.node.isRequired,
  props: PropTypes.object
};
