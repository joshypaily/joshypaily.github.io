"use client";

import * as React from "react";
import Toolbar from "@mui/material/Toolbar";

import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import Link from "next/link";
import { usePathname } from "next/navigation";

const sections = [
  { title: "About", url: "/" },
  { title: "Experience", url: "/experience" },
  //{ title: "Projects", url: "/projects" },
  { title: "Skills", url: "/skills" },
  { title: "Achievements", url: "/achievements" },
  { title: "Education", url: "/education" },
  { title: "Contact", url: "/contact" }
];

const title = "Joshy Paily- Senior Software enginner";

export default function NavBar() {
  let value;
  for (let i = 0; i < sections.length; i++) {
    if (sections[i].url === usePathname()) {
      value = i;
      break;
    }
  }

  return (
    <Box sx={{ width: "100%" }}>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Toolbar sx={{ borderBottom: 1, borderColor: "divider" }}>
          <Typography
            component="h2"
            variant="h5"
            color="inherit"
            align="center"
            noWrap
            sx={{ flex: 1 }}>
            {title}
          </Typography>
        </Toolbar>
        <Tabs value={value} textColor="inherit">
          {sections.map((section) => (
            <Link href={section.url} key={section.title}>
              <Tab label={section.title} />
            </Link>
          ))}
        </Tabs>
        <br />
      </Box>
      <Divider variant="middle" flexItem />
      <Divider />
    </Box>
  );
}
