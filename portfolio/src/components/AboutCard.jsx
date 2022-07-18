import React from 'react'
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import image from "../me.jpg";
import { CardMedia } from "@material-ui/core";
import Card from "@material-ui/core/Card";
import {makeStyles} from "@material-ui/core";


const useStyles = makeStyles((theme) => {
    return {
      text: {
        fontFamily: "prompt",
        fontSize: "2em",
        color: "#002d72",
        margin: "3%",
      },
      link: {
        textDecoration: "none",
        color: "black",
        "&:hover": {
          textDecoration: "underline",
        },
        [theme.breakpoints.down("sm")]: {
          fontSize:"0.8em"
        },
        
      },
      root: {
        margin: "3%",
      },
    };
  });

export default function AboutCard(props) {
    const classes=useStyles()
  return (
    <Card className={props.classes.aboutCont}>
    <CardMedia component="img" image={image} className={props.classes.image} />
    <Container className={classes.root}>
      <Typography className={classes.text}>
        I'm Ali Abdullah, a React Front-End developer.
      </Typography>
      <Typography className={classes.root}>
        <b>SOME FACTS ABOUT ME!</b>
        <br></br>I was born and raised in Pakistan where I travelled alot!
        My interests include sports, working out, and making cool designs!
      </Typography>
      <Typography className={classes.root}>
        You can reach me at,<br></br>
        <a
          className={classes.link}
          href="mailto:aabdullah.bscs20seecs@seecs.edu.pk"
        >
          aabdullah.bscs20seecs@seecs.edu.pk
        </a>
        <br></br>
        Or you can click any of the links below!
      </Typography>
    </Container>
  </Card>
  )
}
