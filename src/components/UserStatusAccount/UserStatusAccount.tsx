import { Box } from "@mui/material";
import styles from "./UserStatusAccount.module.css";
import CircleIcon from "@mui/icons-material/Circle";
interface UserStatusAccountProps {
  status: string;
}

const UserStatusAccount: React.FC<UserStatusAccountProps> = ({
  status,
}: UserStatusAccountProps) => {
  return (
    <Box className={styles.container}>
      <CircleIcon
        className={
          status === "Active"
            ? styles.circleIconActive
            : styles.circleIconSuspendu
        }
      />
      <div
        className={
          status === "Active" ? styles.textActive : styles.textSuspendu
        }
      >
        {status}
      </div>
    </Box>
  );
};
export default UserStatusAccount;