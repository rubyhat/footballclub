import { Menu, MenuItem } from "@mui/material";

import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";

interface IProps {
  anchorEl: null | HTMLElement;
  setAnchorEl: (value: null | HTMLElement) => void;
  open: boolean;
}

const CardGameMenu = (props: IProps) => {
  const { anchorEl, setAnchorEl, open } = props;
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <Menu
      id="card-menu"
      anchorEl={anchorEl}
      open={open}
      onClose={handleClose}
      MenuListProps={{
        "aria-labelledby": "basic-button",
      }}
    >
      <MenuItem onClick={handleClose}>
        <EditIcon sx={{ mr: "0.5rem" }} color="primary" /> Редактировать
      </MenuItem>
      <MenuItem onClick={handleClose}>
        <DeleteIcon sx={{ mr: "0.5rem" }} color="error" /> Удалить
      </MenuItem>
    </Menu>
  );
};

export default CardGameMenu;
