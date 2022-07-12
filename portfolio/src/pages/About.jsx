import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import AboutCard from "../components/AboutCard";



export default function About(props) {
  return (
    <div>
      <Header page="about" theme={props.theme} />
      <AboutCard classes={props.classes} />
      <Footer />
    </div>
  );
}
