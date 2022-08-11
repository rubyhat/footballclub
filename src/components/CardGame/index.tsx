import React from "react";
import {
  Card,
  CardHeader,
  CardContent,
  CardActions,
  Collapse,
  Avatar,
  Box,
  Typography,
  Button,
} from "@mui/material";

import { styled } from "@mui/material/styles";
import { red } from "@mui/material/colors";

import IconButton, { IconButtonProps } from "@mui/material/IconButton";
import ShareIcon from "@mui/icons-material/Share";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import MoreVertIcon from "@mui/icons-material/MoreVert";

import styles from "./styles.module.scss";
import classNames from "classnames/bind";
import ListWithAvatar from "../ListWithAvatar";
import { useUser } from "../../store/user";
import CardGameMenu from "../CardGameMenu";

interface ExpandMoreProps extends IconButtonProps {
  expand: boolean;
}

const ExpandMore = styled((props: ExpandMoreProps) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));

const CardGame = () => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const [expanded, setExpanded] = React.useState(false);
  const cn = classNames.bind(styles);
  const open = Boolean(anchorEl);

  const handleMenuClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const userName = "userName";

  const isAuth = useUser((state) => state.isAuth);
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardGameMenu anchorEl={anchorEl} setAnchorEl={setAnchorEl} open={open} />
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe"></Avatar>
        }
        action={
          isAuth && (
            <IconButton onClick={handleMenuClick} aria-label="settings">
              <MoreVertIcon />
            </IconButton>
          )
        }
        title={`Организатор: ${userName}`}
        subheader="Дата матча: 10.08.2022 | 20:00"
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          Описание игры. This impressive paella is a perfect party dish and a
          fun meal to cook together with your guests. Add 1 cup of frozen peas
          along with the mussels, if you like.
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
        <Box className={cn("show-list-text")}>
          <Typography variant="caption">
            Показать список участников (3/10)
          </Typography>
          <Box>
            <ExpandMore
              expand={expanded}
              onClick={handleExpandClick}
              aria-expanded={expanded}
              aria-label="show more"
            >
              <ExpandMoreIcon />
            </ExpandMore>
          </Box>
        </Box>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>Список участников:</Typography>
          <ListWithAvatar />
        </CardContent>
      </Collapse>
      <CardContent>
        <Button sx={{ width: "100%" }} variant="contained">
          Присоединиться
        </Button>
      </CardContent>
    </Card>
  );
};

export default CardGame;
