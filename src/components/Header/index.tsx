import {
  AppBar,
  Toolbar,
  Typography,
  Container,
  List,
  ListItemButton,
  ListItemAvatar,
  Avatar,
  ListItemText,
} from "@mui/material";
import PersonIcon from "@mui/icons-material/Person";
import SportsSoccerIcon from "@mui/icons-material/SportsSoccer";

import classNames from "classnames/bind";
import styles from "./styles.module.scss";

import { Link, useNavigate } from "react-router-dom";
import { useUser } from "../../store/user";

const Header = () => {
  const cn = classNames.bind(styles);
  const isAuth = useUser((state) => state.isAuth);
  const navigate = useNavigate();
  return (
    <AppBar position="static">
      <Container>
        <Toolbar>
          <Typography variant="h6" component={"span"} sx={{ flexGrow: 1 }}>
            <Link className={cn("link")} to="/">
              <SportsSoccerIcon />
              Football App
            </Link>
          </Typography>
          {isAuth && (
            <List>
              <ListItemButton
                onClick={() => navigate("/u/userName", { replace: true })}
              >
                <ListItemAvatar>
                  <Avatar>
                    <PersonIcon />
                  </Avatar>
                </ListItemAvatar>
                <ListItemText
                  secondaryTypographyProps={{
                    sx: { color: "white" },
                  }}
                  primary="userName"
                  secondary="Мой профиль"
                />
              </ListItemButton>
            </List>
          )}
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Header;
