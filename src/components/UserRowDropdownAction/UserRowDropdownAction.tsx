import React, {useState } from "react";
import { changeStatusUser, removeUser } from "../../services/user/usersRequest";
import { Button, Menu, MenuItem } from "@mui/material";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import styles from "./UserRowDropdownAction.module.css";
interface UserRowDropdownActionProps {
  status: string;
  id: number;
}
const UserRowDropdownAction: React.FC<UserRowDropdownActionProps> = ({
  status,
  id,
}: UserRowDropdownActionProps) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event: any) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const suspendSelectedUser = () => {
    let userId = id;
    changeStatusUser(userId, "Suspendu");
    window.location.reload();
  };
  const activateSelectedUser = () => {
    let userId = id;
    changeStatusUser(userId, "Active");
    window.location.reload();
  };
  const removeSelectedUser = () => {
    let userId = id;
    removeUser(userId);
    window.location.reload();
  };
  return (
    <React.Fragment>
      <Button
        className={styles.buttonMenu}
        id="demo-positioned-button"
        aria-controls={open ? "demo-positioned-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
      >
        <MoreHorizIcon />
      </Button>

      <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "top",
          horizontal: "left",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "left",
        }}
      >
        {status === "Active" ? (
          <MenuItem onClick={suspendSelectedUser} className={styles.textTellow}>
            Suspendre
          </MenuItem>
        ) : (
          <MenuItem onClick={activateSelectedUser} className={styles.textGreen}>
            Activer
          </MenuItem>
        )}
        <MenuItem onClick={removeSelectedUser} className={styles.textRed}>
          {" "}
          Supprimer
        </MenuItem>
      </Menu>
    </React.Fragment>
  );
};
export default UserRowDropdownAction;