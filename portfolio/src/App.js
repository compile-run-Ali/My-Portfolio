import './App.css';
import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Landing from './pages/Landing';
import Projects from './pages/Projects';
import About from './pages/About';
import SingleProject from './pages/singleProject';
import { createTheme, makeStyles } from '@material-ui/core';
import image from "./frontendbackend.jpg";


const theme = createTheme({
  palette: {
    primary: {
      main: "#ef5350",
    },
    secondary: {
      main: "#80d8ff",
    },
  },
  typography: {
    fontFamily: "Prompt",
  },
});

const useStyles = makeStyles((theme) => {
  return {
    root: {
      fontFamily: "Prompt",
      fontWeight: 300,
      fontSize: "3em",
      color: "#002d72",
      [theme.breakpoints.down('sm')]:{
        fontSize:"2em",
      }, 
      marginTop:"100px"
    },
    testFont: {
      fontFamily: "Prompt",
      fontStyle:"italic",
      fontWeight: 200,
      fontSize: "3em",
      color: "#002d72",
      [theme.breakpoints.down('sm')]:{
        fontSize:"2em",
      }, 
      marginTop:"100px"
    },
    aboutCont:{
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      margin:"10%",
      padding:"5%",
      background: '#FFFBF6',
      [theme.breakpoints.down('sm')]:{
        flexDirection:"Column",
        margin:"20%",

      }, 

    },
    testCardCont:{
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      padding:"2%",
      margin:"2%",
      background: 'rgba(255, 251, 246, 0.8)',
      [theme.breakpoints.down('sm')]:{
        flexDirection:"Column",

      }, 

    },
    box: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      minHeight: "50vh",
      marginTop:"250px",
      background: 'rgba(250,0,0,0.2)',
      padding:"5%",
    },
    btn:{
        padding:"1.5em",
        marginTop:"10px",
    },
    projectCards:{
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      minHeight: "50vh",
      background: 'rgba(250,0,0,0.2)',
      [theme.breakpoints.down('sm')]:{
        fontSize:"2em",
        flexDirection:"Column",
      }, 
    },
    cont:{
      minHeight: "50vh",
      padding:"5%"
    },
    img:{
      width:"100%",
      height:"auto",
      position:"sticky",
      top:0,
      zIndex:"-1",
    },
    projCont:{
      display:"flex",
      minHeight: "50vh",
      zIndex: 1,
      background:"#FFFBF6",
      flexDirection:"column",
      alignItems:"center",
    },
    testCont:{
      display:"flex",
      minHeight: "50vh",
      zIndex: 1,
      background:"#2abbf9",
      flexDirection:"column",
      alignItems:"center",
    },
    alternativeCont:{
      display:"flex",
      zIndex: 1,
      background:"#2abbf9",
      flexDirection:"column",
      alignItems:"flex-start",
    },
    alternativeCont2:{
      display:"flex",
      zIndex: 1,
      background:"#2abbf9",
      flexDirection:"column",
      alignItems:"flex-end",
    },
    landing:{
      backgroundImage:`url(${image})`,
      backgroundSize:"cover",
      backgroundRepeat:"no-repeat",
      zIndex:-1,
      height:"100%",
      position:"absolute"
    },
    image: {
      borderRadius: "50%",
      width: "250px",
      [theme.breakpoints.down("sm")]: {
        width: "150px",
      },
    }
  };
});

function App() {
  const classes=useStyles()
  return (
    <Router>
      <Routes>
        <Route index exact element={<Landing theme={theme} classes={classes}/>}/>
        <Route path="/projects" exact element={<Projects theme={theme} classes={classes}/>}/>
        <Route path="/aboutme" exact element={<About theme={theme} classes={classes}/>}/>
        <Route path="projects/:id" exact element={<SingleProject theme={theme} classes={classes}/>}/>
      </Routes>
      </Router>
  );
}

export default App;
