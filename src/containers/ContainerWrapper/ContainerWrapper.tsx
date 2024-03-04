import { Box } from "@mui/material";
import styles from './ContainerWrapper.module.css';
interface ContainerWrapperProps {
    children: any;
}

const ContainerWrapper:React.FC<ContainerWrapperProps> = ({children}:ContainerWrapperProps)=>{
    return (
        <Box  className={styles.container} >
        {children}
      </Box>
    );

}

export default ContainerWrapper;