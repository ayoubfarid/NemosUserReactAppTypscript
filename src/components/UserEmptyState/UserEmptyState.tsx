import { Box } from "@mui/material";
import noDataIcon from "./../../assets/image/no-data-found-icon.png";
import styles from './UserEmptyState.module.css';

interface UserEmptyStateProps{
    label:string;
} 
//Aucun nemo trouve
 const UserEmptyState:React.FC<UserEmptyStateProps>=({label}:UserEmptyStateProps)=>{
    return (
        <>
        <Box className={styles.container} >
             <img src={noDataIcon} alt="no data found " />
            
            <h2> {label}</h2>
          </Box>
        </>
    );
}
export default UserEmptyState;