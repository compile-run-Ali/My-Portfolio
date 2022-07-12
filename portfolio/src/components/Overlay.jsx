import React from "react";
import { Container } from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => {
    return {
      heading:{
        fontFamily: "Prompt",
        fontWeight: 300,
        fontSize: "4em",
        color: "#002d72",
        [theme.breakpoints.down('sm')]:{
          fontSize:"3em",
        }, 
        marginTop:"1%"
      },
      heading2:{
        fontFamilty:"Prompt",
        fontWeight:300,
        fontSize:"3em",
        [theme.breakpoints.down('sm')]:{
            fontSize:"2em",
          }, 
        margin:"2%",
      },
      text:{
        fontFamilty:"Prompt",
        fontWeight:200,
        fontSize:"1em",
        margin:"2%",
      },
      grid:{
        margin:"2%",
        padding:"2%"
      }
    };
  });

export default function Overlay(props) {
    const classes=useStyles()
  return (
      <Container className={props.classes.projCont} maxWidth={false}>
        <Typography className={classes.heading}>
          {props.title}
        </Typography>
        <Typography className={classes.heading2}>{props.smallDesc}</Typography>
        <Typography className={classes.text}>{props.description}</Typography>
        <Grid container spacing={2} className={classes.grid}>
          <Grid item xs={8}>
            <b>Role</b>
            <br></br>
            {props.role}
          </Grid>
          <Grid item xs={4}>
            <b>Technologies Used</b>
            <br></br>
            {props.technologies}
          </Grid>
          <Grid item xs={8}>
            <b>Year</b>
            <br></br>
            {props.year}
          </Grid>
        </Grid>
      </Container>
  );
}
