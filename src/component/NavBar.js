"use client";

import * as React from "react";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";

const title = "Joshy Paily- Senior Software Enginner";

export default function NavBar() {
  return (
    <Box sx={{ width: "100%" }}>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Toolbar sx={{ borderBottom: 1, borderColor: "divider" }}>
          <Typography
            fontSize="30"
            color="inherit"
            align="center"
            noWrap
            sx={{ flex: 1, fontSize: 20 }}>
            {title}
          </Typography>
        </Toolbar>
      </Box>
      <Divider variant="middle" flexItem />
      <Divider />
    </Box>
  );
}
