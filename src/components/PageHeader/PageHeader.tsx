import { Grid } from "@mui/material";
import React, { useState } from "react";
import styles from "./PageHeader.module.css";
import HeaderLabel from "../HeaderLabel";
import { ButtonPrimary } from "../ButtonPrimary";
import AddIcon from "@mui/icons-material/Add";
import { ModalBasic } from "../ModalBasic";
import { UserFormAdd } from "../UserFormAdd";

interface PageHeaderProps {
}

const PageHeader: React.FC<PageHeaderProps> = ({
  ...props
}: PageHeaderProps) => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    console.log("clicked");
    setOpen(true);
  };
  const handleClose = () => setOpen(false);
  return (
    <React.Fragment>
      <Grid container className={styles.container}>
        <Grid>
          <HeaderLabel title="Nemo" />
        </Grid>
        <Grid>
          <ButtonPrimary
            colorBtn="primary"
            title="Ajouter"
            startIcon={<AddIcon />}
            onClick={handleOpen}
          ></ButtonPrimary>
          <ModalBasic
            onClick={handleClose}
            body={<UserFormAdd handleClose={handleClose} />}
            open={open}
          />
        </Grid>
      </Grid>
    </React.Fragment>
  );
};
export default PageHeader;