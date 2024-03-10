
import { Button } from "@mui/material";
import styles from './ButtonSecondary.module.css';
interface ButtonSecondaryProps{
    title:string;
    onClick:()=>void;

}

const ButtonSecondary:React.FC<ButtonSecondaryProps> = ({title,onClick}:ButtonSecondaryProps)=>{
    return (
        <Button variant="outlined" onClick={onClick} className={styles.button}>
        {title}
      </Button>
    );

}
export default ButtonSecondary;