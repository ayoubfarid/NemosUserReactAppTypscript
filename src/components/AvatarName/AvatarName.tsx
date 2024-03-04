import styles from "./AvatarName.module.css"
import { Avatar } from "@mui/material";
interface AvatarNameProps{
    label:string;
}
const AvatarName:React.FC<AvatarNameProps>=({label}:AvatarNameProps)=>{
    return (
        <Avatar   className={styles.avatar} >
            {label}
        </Avatar>

    );

}
export default AvatarName;