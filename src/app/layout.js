"use client";

import { Inter } from "next/font/google";
import "./globals.css";
// import { Container } from "@mui/joy";
import Container from 'react-bootstrap/Container';
// import CssBaseline from "@mui/material/CssBaseline";
import AppNavBar from "./blog/components/AppNavBar";
import Footer from "./blog/components/Footer";
import PropTypes from "prop-types";
import React, { useState, useEffect } from 'react';

const inter = Inter({ subsets: ["latin"] });





export default function RootLayout({ children, ...props }) {
  // const [theme, setTheme] = useState('light');

  // // Load saved theme from localStorage on mount
  // useEffect(() => {
  //   const savedTheme = localStorage.getItem('theme') || 'light';
  //   setTheme(savedTheme);
  //   document.body.className = savedTheme === 'dark' ? 'bg-dark text-light' : 'bg-light text-dark';
  // }, []);

  // // Toggle between light and dark
  // const toggleTheme = () => {
  //   const newTheme = theme === 'light' ? 'dark' : 'light';
  //   setTheme(newTheme);
  //   localStorage.setItem('theme', newTheme);
  //   document.body.className = newTheme === 'dark' ? 'bg-dark text-light' : 'bg-light text-dark';
  // };


  return (
    <html lang="en">
      <head>
        <title>Joshy&apos;s-portfolio</title>
        {/* <script src="https://cdn.jsdelivr.net/npm/react/umd/react.production.min.js" crossOrigin="anonymous"></script>
        <script
          src="https://cdn.jsdelivr.net/npm/react-dom/umd/react-dom.production.min.js"
          crossOrigin="anonymous"></script>
        <script
          src="https://cdn.jsdelivr.net/npm/react-bootstrap@next/dist/react-bootstrap.min.js"
          crossOrigin="anonymous"></script>*/}
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.5/dist/css/bootstrap.min.css"
          integrity="sha384-SgOJa3DmI69IUzQ2PVdRZhwQ+dy64/BUtbMJw1MZ8t5HZApcHrRKUc4W0kG879m7"
          crossOrigin="anonymous"
        />

      </head>
      <body className={inter.className}>
        <AppNavBar />

        {/* <div className="container py-5">
          <button onClick={toggleTheme} className="btn btn-outline-primary mb-4">
            Switch to {theme === 'light' ? 'Dark' : 'Light'} Mode
          </button>

          <h1>Hello, Bootstrap in {theme} mode!</h1>
          <p>This text and background color change based on the selected theme.</p>
        </div> */}

        <Container >{children}</Container>
        <Footer />
      </body>
    </html>
  );
}

RootLayout.propTypes = {
  children: PropTypes.node.isRequired,
  props: PropTypes.object
};
