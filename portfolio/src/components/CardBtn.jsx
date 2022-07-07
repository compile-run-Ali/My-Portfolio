import React from "react";
import { CardMedia } from "@material-ui/core";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import CardContent from "@material-ui/core/CardContent";
import image from "../project.jpg";
import ButtonBase from "@material-ui/core/ButtonBase";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => {
  return {
    buttonbase: {
      opacity: 0.5,
      position: "relative",
      transition: "0.5s",
      "&:hover": {
        opacity: 1,
      },
    },
    cardTxt: {
      position: "absolute",
      fontWeight: "bold",
      width:"100%",
      background:"transparent",
      color:"white",
      opacity:"0.5",
      padding:"1em",
      transition:"0.5s",
      "&:hover":{
        background:"black"
      },
    },
  };
});

export default function CardBtn(props) {
  const classes = useStyles();
  return (
    <Card sm={{ maxWidth: 345 }}>
      <ButtonBase onClick={props.handleClick} className={classes.buttonbase}>
        <CardMedia component="img" height="100" image={image} />
        <div className={classes.cardTxt}>
          <div>Check Out Some of my projects!</div>
        </div>
      </ButtonBase>
    </Card>
  );
}
