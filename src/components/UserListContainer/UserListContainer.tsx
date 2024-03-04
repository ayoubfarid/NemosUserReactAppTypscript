import { Box } from "@mui/material";
import styles from './UserListContainer.module.css';
import UserListing from "../UserListing";

const UserListContainer:React.FC=()=>{
    return(
        <Box className={styles.container}  >
                <UserListing/>
        </Box>
    );

}
export default UserListContainer;