import { Box } from "@mui/material";
import styles from "./UserAvatarWithInfo.module.css";
import AvatarName from "../AvatarName";
import TextBoldDisplay from "../TextBoldDisplay";
import TextRegularDisplay from "../TextRegularDisplay";
interface UserAvatarWithInfoProps {
  firstname: string;
  lastname: string;
  email: string;
}

const UserAvatarWithInfo: React.FC<UserAvatarWithInfoProps> = ({
  firstname,
  lastname,
  email,
}: UserAvatarWithInfoProps) => {
  return (
    <Box className={styles.container}>
      <AvatarName label={firstname.charAt(0) + "" + lastname.charAt(0)} />
      <Box
        className={styles.infoContainer}
      >
        <TextBoldDisplay>{firstname + " " + lastname}</TextBoldDisplay>
        <TextRegularDisplay>{email}</TextRegularDisplay>
      </Box>
    </Box>
  );
};
export default UserAvatarWithInfo;