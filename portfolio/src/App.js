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
import { createTheme } from '@material-ui/core';

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

function App() {
  return (
    <Router>
      <Routes>
        <Route index exact element={<Landing theme={theme}/>}/>
        <Route path="/projects" exact element={<Projects theme={theme}/>}/>
        <Route path="/aboutme" exact element={<About theme={theme}/>}/>
      </Routes>
      </Router>
  );
}

export default App;
