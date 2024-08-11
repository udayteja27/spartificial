import React from "react";
import { Link } from "react-router-dom";
import { List, ListItem, ListItemText } from "@mui/material";

const Sidebar = () => {
  return (
    <div style={{ width: "200px", position: "fixed", height: "100%" }}>
      <List>
        <ListItem button component={Link} to="/">
          <ListItemText primary="Home" />
        </ListItem>
        <ListItem button component={Link} to="/users">
          <ListItemText primary="Users" />
        </ListItem>
        <ListItem button component={Link} to="/posts">
          <ListItemText primary="Posts" />
        </ListItem>
      </List>
    </div>
  );
};

export default Sidebar;
