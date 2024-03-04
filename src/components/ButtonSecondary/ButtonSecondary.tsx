
import { Button } from "@mui/material";
import style from './ButtonSecondary.module.css';
interface ButtonSecondaryProps{
    title:string;
    onClick:()=>void;

}

const ButtonSecondary:React.FC<ButtonSecondaryProps> = ({title,onClick}:ButtonSecondaryProps)=>{
    return (
        <Button variant="outlined" onClick={onClick} className={style.button}>
        {title}
      </Button>
    );

}
export default ButtonSecondary;