import React from "react";
import Header from "../components/Header";
import { makeStyles, ThemeProvider } from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import Button from "@material-ui/core/Button";
import { useNavigate } from "react-router";

const useStyles = makeStyles((theme) => {
  return {
    root: {
      fontFamily: "Prompt",
      fontWeight: 300,
      fontSize: "4em",
      color: "#002d72",
      [theme.breakpoints.down('sm')]:{
        fontSize:"2em",
      }, 
    },
    box: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      minHeight: "50vh",
      marginTop:"250px",
    },
    btn:{
        padding:"1.5em",
        marginTop:"10px",
    }
  };
});

export default function Landing(props) {
  const classes = useStyles();
  const navigate=useNavigate();
  function handleClick(){
    navigate("/projects")
  }
  return (
    <ThemeProvider>
      <Header page="landing" theme={props.theme} />

      <Container className={classes.box}>
        <Typography className={classes.root}  >
          Hi im Ali Abdullah👋. I am a React Front-End developer. I Love to make pretty Designs 😊.
        </Typography>
        <Button className={classes.btn} variant="outlined" color="primary" onClick={handleClick}>Check out some of my projects✨</Button>
      </Container>

    </ThemeProvider>
  );
}
