import React from "react";
import { CardMedia, CardContent } from "@material-ui/core";
import Card from "@material-ui/core/Card";
import { makeStyles } from "@material-ui/core";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme) => {
  return {
    card: {
      maxWidth: 500,
      width:"30%",
      margin: "auto",
      transition: "0.3s",
      opacity:0.8,
      boxShadow: "0 8px 40px -12px rgba(0,0,0,0.3)",
      "&:hover": {
        boxShadow: "0 16px 70px -12.125px rgba(0,0,0,0.3)",
        cursor:"pointer",
        opacity:1
      },
      [theme.breakpoints.down('sm')]:{
        width:"100%",
        marginTop:"10px",
      }, 
    },
    media: {
      paddingTop: "56.25%",
    },
    content: {
      textAlign: "left",
    },
    divider: {},
    heading: {
      fontWeight: "bold",
    },
    subheading: {
      lineHeight: 1.8,
    },
  };
});

export default function CardBtn(props) {
  const classes = useStyles();
  return (
    <>
    <Card className={classes.card} onClick={()=>props.handleClick(props.id)}>
        <CardMedia className={classes.media} image={props.pic} />
        <CardContent className={classes.content}>
          <Typography
            className={"MuiTypography--heading"}
            variant={"h6"}
            gutterBottom
          >
            {props.title}
          </Typography>
          <Typography
            className={"MuiTypography--subheading"}
            variant={"caption"}
            >
            {props.smallDesc}
          </Typography>
        </CardContent>
    <hr></hr>
    </Card>
              </>
  );
}
