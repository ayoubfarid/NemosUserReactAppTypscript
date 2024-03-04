import { Box } from "@mui/material";
import React from "react";
import { useState } from "react";
import styles from "./UserFormAdd.module.css";
import TextFieldWithLabel from "../TextFieldWithLabel";
import { ButtonSecondary } from "../ButtonSecondary";
import { ButtonPrimary } from "../ButtonPrimary";
import { addUser } from "../../services/user/usersRequest";
import {  UserInfo } from "../../types/User";

interface UserFormAddProps {
  handleClose: () => void;
}


class UserFormAdd extends React.Component<UserFormAddProps, UserInfo> {
  constructor(props: UserFormAddProps) {
    super(props);
    this.state = {
      prenom: "",
      nom: "",
      email: "",
    };
    this.handlePrenomChange = this.handlePrenomChange.bind(this);
    this.handleNomChange = this.handleNomChange.bind(this);
    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleClose = this.handleClose.bind(this);
  }

  handleClose() {
    // Assuming props.handleClose is a function passed down as a prop
    this.props.handleClose(); // Call the handleClose function from props
  }

  handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    let { nom, prenom, email } = this.state;
    let user = this.userBuild(prenom, nom, email);
    console.log("user", user);
    // add user to list
    addUser(user);
    //reset form
    this.reset();
    //close model
    this.handleClose();
    window.location.reload();

    event.preventDefault();
  }
  userBuild(prenom: string, nom: string, email: string): UserInfo {
    let user: UserInfo = {
      nom,
      prenom,
      email,
      dateCreation:new Date().toISOString(),
      status : "Active"
    };
    return user;
  }
  reset() {
    this.setState({
      prenom: "",
      nom: "",
      email: "",
    });
  }

  handlePrenomChange(event: React.ChangeEvent<HTMLInputElement>) {
    this.setState({ prenom: event.target.value });
  }
  handleNomChange(event: React.ChangeEvent<HTMLInputElement>) {
    this.setState({ nom: event.target.value });
  }
  handleEmailChange(event: React.ChangeEvent<HTMLInputElement>) {
    this.setState({ email: event.target.value });
  }

  render() {
    return (
      <Box className={styles.container}>
        <h2 className={styles.h2}> Nouveau Nemo </h2>
        <form onSubmit={this.handleSubmit}>
          <TextFieldWithLabel
            label="Prenom"
            value={this.state.prenom}
            onChange={this.handlePrenomChange}
          />
          <TextFieldWithLabel
            label="Nom"
            value={this.state.nom}
            onChange={this.handleNomChange}
          />
          <TextFieldWithLabel
            label="Email"
            value={this.state.email}
            onChange={this.handleEmailChange}
          />

          <>
            <Box className={styles.footer}>
              <ButtonSecondary
                title="Annuler"
                onClick={this.handleClose}
              ></ButtonSecondary>
              <ButtonPrimary
                title="Ajouter"
                colorBtn="primary"
                onClick={this.handleSubmit}
              ></ButtonPrimary>
            </Box>
          </>
        </form>
      </Box>
    );
  }
}
export default UserFormAdd;