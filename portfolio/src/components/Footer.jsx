import React from "react";
import { makeStyles } from "@material-ui/core";
import InstagramIcon from "@material-ui/icons/Instagram";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import EmailIcon from "@material-ui/icons/Email";

const useStyles = makeStyles((theme) => {
    return {
      footer:{
        display:"flex",
        justifyContent:"space-around",
        position:"fixed",
        bottom:0,
        padding:"15px",
        boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
        width:"100vw",
        background:"#FFFBF6"
      }
    };
  });

export default function Footer() {
    const classes=useStyles()
  return (
    <footer className={classes.footer}>
      <a href="https://www.instagram.com/__ali._.a/">
        <InstagramIcon />
      </a>
      <a href="https://www.linkedin.com/in/ali-abdullah-8bab4b1b9/">
        <LinkedInIcon />
      </a>
      <a href="mailto:aabdullah.bscs20seecs@seecs.edu.pk">
        <EmailIcon />
      </a>
    </footer>
  );
}
