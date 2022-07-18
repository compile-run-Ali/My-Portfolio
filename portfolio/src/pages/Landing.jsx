import React from "react";
import Header from "../components/Header";
import { ThemeProvider } from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import Button from "@material-ui/core/Button";
import { useNavigate } from "react-router";
import Footer from "../components/Footer";
import Testimonials from "../components/Testimonials";
import testimonials from "../testimonials";
import Divider from "@material-ui/core/Divider";



export default function Landing(props) {
  const navigate=useNavigate();
  function handleClick(){
    navigate("/projects")
  }

  const testData = testimonials.map((testimonial) => {
    return <Testimonials key={testimonial.id} {...testimonial} classes={props.classes} />;
  });

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
      <Container className={props.classes.testCont} maxWidth={false}>
        <Typography className={props.classes.testFont}>
        Testimonials from a few, 
         <hr></hr>
        </Typography>
      {testData}
      </Container>
    <Footer/>
    </div>
    </ThemeProvider>
  );
}
