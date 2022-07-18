import React from "react";
import { Container } from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
const useStyles = makeStyles((theme) => {
  return {
    heading: {
      fontFamily: "Prompt",
      fontWeight: 300,
      fontSize: "4em",
      color: "#002d72",
      [theme.breakpoints.down("sm")]: {
        fontSize: "3em",
      },
      marginTop: "1%",
    },
    heading2: {
      fontFamilty: "Prompt",
      fontWeight: 300,
      fontSize: "3em",
      [theme.breakpoints.down("sm")]: {
        fontSize: "2em",
      },
      margin: "2%",
    },
    text: {
      fontFamilty: "Prompt",
      fontWeight: 200,
      fontSize: "1em",
      margin: "2%",
    },
    grid: {
      margin: "2%",
      padding: "2%",
    },
  };
});

export default function Testimonials(props) {
  const classes = useStyles();

  return (
    <Container className={Number(props.id)%2===0?props.classes.alternativeCont:props.classes.alternativeCont2} maxWidth={false}>
      <Card className={props.classes.testCardCont}>
        <CardMedia
          component="img"
          image={props.image}
          className={props.classes.image}
        />
        <Container className={classes.root}>
          <Typography className={classes.text}>
            <b>{props.name}</b>
          </Typography>
          <Typography className={classes.text}>{props.remarks}</Typography>
        </Container>
      </Card>
    </Container>
  );
}
