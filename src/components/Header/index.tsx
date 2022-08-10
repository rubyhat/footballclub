import { AppBar, Toolbar, Typography, Box, Container } from "@mui/material";
import PersonIcon from "@mui/icons-material/Person";
import SportsSoccerIcon from "@mui/icons-material/SportsSoccer";

import classNames from "classnames/bind";
import styles from "./styles.module.scss";

import { Link } from "react-router-dom";

const Header = () => {
  const cn = classNames.bind(styles);
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
          <Box className={cn("avatar")}>
            <PersonIcon />
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Header;
