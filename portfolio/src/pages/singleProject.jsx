import React from "react";
import { useParams } from "react-router-dom";
import data from "../data";
import Header from "../components/Header";
import Overlay from "../components/Overlay";


export default function SingleProject(props) {
  const params = useParams();
  const project = data.filter((x) => {
    return x.id == params.id;
  });
  console.log(project[0].title);
  return (
    <div>
      <Header page="singleProj" theme={props.theme} />
      <img src={project[0].pic} className={props.classes.img} />
      <Overlay  key={project[0].id} {...project[0]} classes={props.classes}/>     
    </div>
  );
}
