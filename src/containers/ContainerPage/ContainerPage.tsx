
import { Box } from '@mui/material';
import styles from './ContainerPage.module.css';

const ContainerPage = ({ children}:any) =>{
    return(
        <Box   className={styles.container} >
        {children}
        </Box>
    );

}
export default ContainerPage;