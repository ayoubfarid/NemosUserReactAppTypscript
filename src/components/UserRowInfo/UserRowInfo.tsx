import { Grid } from "@mui/material";
import {  UserInfo } from "../../types/User";
import styles from "./UserRowInfo.module.css"
import UserAvatarWithInfo from "../UserAvatarWithInfo";
import TextLabelWithValue from "../TextLabelWithValue";
import UserStatusAccount from "../UserStatusAccount/UserStatusAccount";
import UserRowDropdownAction from "../UserRowDropdownAction/UserRowDropdownAction";
import { formatDate } from "../../utils/FormatDate";

interface UserRowInfoProps{
        user:UserInfo;
}

const UserRowInfo : React.FC<UserRowInfoProps> = ({user}) => {
                
        return (

                <Grid container className={styles.container}  >
            <Grid item xs={4}>
                <UserAvatarWithInfo email={user.email}   lastname={user.nom}  firstname={user.prenom}/>
            </Grid>
            <Grid item xs={3}>
                <TextLabelWithValue label="Date Creation" value={ user.dateCreation!=null ? formatDate(user.dateCreation?.toString()) :  "" } />
            </Grid>
            <Grid item xs={3}>
                <UserStatusAccount  status={ user.status != null ?  user.status : " "} />
            </Grid>
            <Grid item xs={2}>
                <UserRowDropdownAction id = {user.id != null  ? user.id :0 } status={ user.status != null ?  user.status : " "}  />
            </Grid>
        </Grid>
        );
}
export default UserRowInfo;