import React from "react";
import Header from "../components/Header";
import { ThemeProvider } from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import Button from "@material-ui/core/Button";
import { useNavigate } from "react-router";
import Footer from "../components/Footer";



export default function Landing(props) {
  const navigate=useNavigate();
  function handleClick(){
    navigate("/projects")
  }
  return (
    <ThemeProvider  theme={props.theme}>
      <Header page="landing" theme={props.theme} />
    <div className={props.classes.landing}>
      <Container className={props.classes.box} maxWidth={false}>
        <Typography className={props.classes.root}  >
          Hi, I'm Ali Abdullah👋. I am a React Front-End developer. I Love to make pretty Designs 😊.
        </Typography>
        <Button className={props.classes.btn} variant="contained" color="secondary"  onClick={handleClick}>Check out some of my projects✨</Button>
      </Container>
    <Footer/>
    </div>
    </ThemeProvider>
  );
}
