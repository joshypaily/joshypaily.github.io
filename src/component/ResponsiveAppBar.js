"use client";

import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navItemColour = "#000000";
const sections = [
  { title: "About", url: "/", colour: navItemColour },
  { title: "Experience", url: "/experience", colour: navItemColour },
  { title: "Projects", url: "/projects", colour: navItemColour },
  { title: "Skills", url: "/skills", colour: navItemColour },
  { title: "Achievements", url: "/achievements", colour: navItemColour },
  { title: "Education", url: "/education", colour: navItemColour },
  { title: "Contact", url: "/contact", colour: navItemColour }
];

function ResponsiveAppBar() {
  for (let i = 0; i < sections.length; i++) {
    if (sections[i].url === usePathname()) {
      sections[i].colour = "white";
    } else {
      sections[i].colour = navItemColour;
    }
  }
  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar position="static">
      <Container maxWidth="xl" sx={{ borderBottom: 1, backgroundColor: "" }}>
        <Toolbar>
          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left"
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left"
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" }
              }}
            >
              {sections.map((page) => (
                <MenuItem key={page.title} onClick={handleCloseNavMenu}>
                  <Link href={page.url} key={page.title}>
                    {page.title}
                  </Link>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            {sections.map((page) => (
              <Button
                key={page.title}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: page.colour, display: "block" }}
              >
                <Link href={page.url} key={page.title}>
                  {page.title}
                </Link>
              </Button>
            ))}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default ResponsiveAppBar;
