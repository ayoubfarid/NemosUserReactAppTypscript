import { Box } from "@mui/material";
import styles from './UserLoadingState.module.css';
import UserRowSkeleton from "../UserRowSkeleton";
const UserLoadingState:React.FC=()=>{
    let array=[1,2,3,4];
    return (
        <>
        <Box  className={styles.container} >
        {array.map(number=><UserRowSkeleton></UserRowSkeleton>)}
            
          </Box>
        </>
    );
}
export default UserLoadingState;