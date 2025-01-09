"use client";

import { Inter } from "next/font/google";
import "./globals.css";
import { Container } from "@mui/joy";
import CssBaseline from "@mui/material/CssBaseline";
import ResponsiveAppBar from "@/component/ResponsiveAppBar";
import AppAppBarOriginal from "./blog/components/AppAppBar2";
import AppAppBar from "./blog/components/AppAppBar";
import AppTheme from "./shared-theme/AppTheme";
import Footer from "./blog/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children, ...props }) {
  return (
    <html lang="en">
      <head>
        <title>Joshy's-portfolio</title>
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
