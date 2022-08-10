import React from "react";
import {
  List,
  ListItem,
  Divider,
  ListItemText,
  ListItemAvatar,
  Avatar,
  Typography,
} from "@mui/material";

const ListWithAvatar = () => {
  return (
    <List sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}>
      <ListItem>
        <ListItemAvatar>
          <Avatar
            sx={{ bgcolor: "#14b890" }}
            alt="Lemy Sharp"
            src="/static/images/avatar/1.jpg"
          />
        </ListItemAvatar>
        <ListItemText primary="1. Leonardo" />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem>
        <ListItemAvatar>
          <Avatar
            sx={{ bgcolor: "#14b890" }}
            alt="Ravis Howard"
            src="/static/images/avatar/2.jpg"
          />
        </ListItemAvatar>
        <ListItemText primary="2. Ricardo" />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem>
        <ListItemAvatar>
          <Avatar
            sx={{ bgcolor: "#14b890" }}
            alt="Andy Baker"
            src="/static/images/avatar/3.jpg"
          />
        </ListItemAvatar>
        <ListItemText primary="3. Arstando" />
      </ListItem>
    </List>
  );
};
export default ListWithAvatar;
