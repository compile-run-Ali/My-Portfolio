import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import AboutCard from "../components/AboutCard";
import { ThemeProvider } from "@material-ui/core";



export default function About(props) {
  return (
    <ThemeProvider  theme={props.theme}>
      <Header page="about" theme={props.theme} />
      <AboutCard classes={props.classes} />
      <Footer />
    </ThemeProvider >
  );
}
