import {
  Avatar,
  Divider,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Paper,
  Typography,
} from "@mui/material";

import PersonIcon from "@mui/icons-material/Person";

const CardUserProfile = () => {
  return (
    <>
      <Typography sx={{ mb: "1rem" }} variant="h5">
        Профиль
      </Typography>
      <Paper>
        <List sx={{ width: "100%" }}>
          <ListItem>
            <ListItemAvatar>
              <Avatar alt="UserName" src="/static/images/avatar/1.jpg" />
            </ListItemAvatar>
            <ListItemText primary="userName" secondary="Имя" />
          </ListItem>
          <Divider />
          <ListItem>
            <ListItemAvatar>
              <Avatar>
                <PersonIcon />
              </Avatar>
            </ListItemAvatar>
            <ListItemText primary="userPhone" secondary="Телефон" />
          </ListItem>
        </List>
      </Paper>
    </>
  );
};

export default CardUserProfile;
