
import React from 'react';
import { Grid } from '@mui/material';
import Skeleton from '@mui/material/Skeleton';
import styles from './UserRowSkeleton.module.css';
const UserRowSkeleton:React.FC=()=>{
    return (
        <Grid container className={styles.container} >
      <Grid item xs={2}>
      <Skeleton variant="circular" width={50} height={50}   />
      </Grid>
      <Grid item xs={3}>
      <Skeleton variant="rectangular" width={160} height={10} />
      </Grid>
      <Grid item xs={3}>
      <Skeleton variant="rectangular" width={160} height={10} />
      </Grid>
      <Grid item xs={3}>
      <Skeleton variant="rectangular" width={160} height={10} />
      </Grid>
    </Grid>
    );
    
}
export default UserRowSkeleton;