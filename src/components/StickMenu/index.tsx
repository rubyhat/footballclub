import React from "react";
import { Link } from "react-router-dom";

import { Box, Button } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";

import classNames from "classnames/bind";
import styles from "./styles.module.scss";

const StickMenu = () => {
  const cn = classNames.bind(styles);
  return (
    <nav className={cn("nav")}>
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
            to="/"
          >
            <Button variant="contained">
              <AddIcon sx={{ fill: "white" }} fontSize="medium" />
            </Button>
          </Link>
        </li>
        <li className={cn("list-item")}>
          <Link className={cn("link")} to="/">
            <Button variant="contained">Вход</Button>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default StickMenu;
