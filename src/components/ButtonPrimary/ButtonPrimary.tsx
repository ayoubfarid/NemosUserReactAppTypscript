
import { Button } from "@mui/material";
import styles from './ButtonPrimary.module.css';
interface ButtonPrimaryProps{
    title:string;
    startIcon?:any;
    endIcon?:any;
    colorBtn:string;
    onClick:(event? : any )=>void;

}

const ButtonPrimary:React.FC<ButtonPrimaryProps> = ({title,onClick,startIcon,endIcon}:ButtonPrimaryProps)=>{
    return (
        <Button className={styles.buttton} onClick ={onClick}  color="primary"  startIcon={startIcon} endIcon={endIcon} variant="contained"  >
        {title}
    </Button>
    );

}
export default ButtonPrimary;