import React from "react";
import { Link } from "react-router-dom";
import { isMobile } from "react-device-detect";

import { Button } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";

import classNames from "classnames/bind";
import styles from "./styles.module.scss";
import { useUser } from "../../store/user";

const StickMenu = () => {
  const cn = classNames.bind(styles);
  const isAuth = useUser((state) => state.isAuth);
  return (
    <nav className={cn(["nav", !isMobile && "nav_extended-bottom"])}>
      <ul className={cn("list")}>
        <li className={cn("list-item")}>
          <Link className={cn("link")} to="/">
            <Button variant="contained">Список игр</Button>
          </Link>
        </li>
        <li className={cn("list-item")}>
          <Link
            className={cn("link")}
            style={{ display: "inline-block", padding: "0.25rem" }}
            to={isAuth ? "/g/new" : "/login"}
          >
            <Button variant="contained">
              <AddIcon sx={{ fill: "white" }} fontSize="medium" />
            </Button>
          </Link>
        </li>
        <li className={cn("list-item")}>
          {isAuth && (
            <Link className={cn("link")} to="/u/userName">
              <Button variant="contained">Профиль</Button>
            </Link>
          )}
          {!isAuth && (
            <Link className={cn("link")} to="/login">
              <Button variant="contained">Вход</Button>
            </Link>
          )}
        </li>
      </ul>
    </nav>
  );
};

export default StickMenu;
