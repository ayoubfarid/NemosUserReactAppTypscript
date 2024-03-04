import { TextField } from "@mui/material";
import styles from "./TextFieldWithLabel.module.css";
interface TextFieldWithLabelProps{
    label:string;
    value:string;
    onChange:(event:React.ChangeEvent<HTMLInputElement>)=>void;
}
const TextFieldWithLabel:React.FC<TextFieldWithLabelProps> = ({label,value,onChange}:TextFieldWithLabelProps)=>{
    return(
        <>
        <p className={styles.label} >{label}</p>
              <TextField  onChange={onChange} value={value} required id="outlined-required"fullWidth  label="" />
          
          </>
    );
}

export default TextFieldWithLabel;