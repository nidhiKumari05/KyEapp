import React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import { Link } from "react-router-dom";
import ListItemIcon from "@mui/material/ListItemIcon";
import HomeIcon from "@mui/icons-material/Home";
import CompareIcon from "@mui/icons-material/Compare";
import Box from "@mui/material/Box";

function Sidebar() {
  return (
    <Box
      sx={{
        background:
          "linear-gradient(to bottom, rgba(0, 0, 0, 0.8), rgba(50, 50, 50, 0.7))",
        color: "white",
        height: '100vh',
        padding: "10px",
        position: "sticky",
      }}
    >
      <List component="nav" style={{ flexGrow: 1 }}>
        <ListItem button component={Link} to="/">
          <ListItemIcon>
            <HomeIcon sx={{ color: "white" }} />
          </ListItemIcon>
          <ListItemText primary="Product Details" sx={{ color: "white" }} />
        </ListItem>
        <ListItem button component={Link} to="/compare">
          <ListItemIcon>
            <CompareIcon sx={{ color: "white" }} />
          </ListItemIcon>
          <ListItemText primary="Compare Products" sx={{ color: "white" }} />
        </ListItem>
      </List>
      <div className=""></div>
    </Box>
  );
}

export default Sidebar;
