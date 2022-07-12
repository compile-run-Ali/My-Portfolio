import React from "react";
import Header from "../components/Header";
import { Container } from "@material-ui/core";
import data from "../data";
import CardBtn from "../components/CardBtn";
import { useNavigate } from "react-router";
import Typography from "@material-ui/core/Typography";

export default function Projects(props) {
  const navigate = useNavigate();
  function handleClick(id) {
    navigate(`/projects/${id}`);
  }
  const projects = data.map((project) => {
    return <CardBtn key={project.id} {...project} handleClick={handleClick} />;
  });
  return (
    <div>
      <Header page="projects" theme={props.theme} />
      <Container className={props.classes.cont} maxWidth={false}>

        <Typography className={props.classes.root}>
          A few of my Projects,
        </Typography>
      </Container>
        <Container className={props.classes.projectCards} maxWidth={false}>
          {projects}
        </Container>
    </div>
  );
}
