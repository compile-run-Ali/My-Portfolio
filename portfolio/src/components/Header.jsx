import * as React from "react";
import AppBar from "@material-ui/core/AppBar";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import HomeIcon from "@material-ui/icons/Home";
import Toolbar from "@material-ui/core/Toolbar";
import { makeStyles, ThemeProvider } from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import { useNavigate } from "react-router";
import { useState } from "react";

const useStyles = makeStyles((theme) => {
  return {
    buttonGroup: {
      marginLeft: "auto",
    },
    disabledButton: {
      backgroundColor: "yellow",
    },
    typo: {
      cursor: "pointer",
    },
    ul:{
      display:'flex',
      padding:"0",
      [theme.breakpoints.down('sm')]:{
        position:"absolute",
        top:"50%",
        right:"25px",
        flexDirection:"column",
        height:"calc(100vh-77px)",
        display:"none"
      }, 
    },
    ulExpanded:{
      display:'flex',
      padding:"0",
      [theme.breakpoints.down('sm')]:{
        position:"absolute",
        width:"30%",
        top:"50%",
        right:"25px",
        flexDirection:"column",
        height:"calc(100vh-77px)",
        display:"block",
        marginTop:"30px"
      }, 
    },
    li:{
      listStyleType:"none",
      margin:"0 1rem",
      listStyle:"none",
      [theme.breakpoints.down('sm')]:{
        textAlign:"center",
        margin:"1px",
        width:"100%",
      }, 
    },
    topdown:{
      transition:"background-color 0.2s ease-in-out",
      position:"absolute",
      top:"50%",
      right:"25px",
      transform:"translateY(-50%)",
      display:"none",
      cursor:"pointer",
      [theme.breakpoints.down('sm')]:{
        display:"block"

      }, 
    },
    button:{
      width:"100%"
    }
  };
});

export default function Header(props) {
  const classes = useStyles();
  const navigate = useNavigate();
  const [isExpanded,setIsExpanded]=useState(false)
  console.log(isExpanded)
  function expand(){
    setIsExpanded(!isExpanded);
  }

  function handleClickProj() {
    navigate("/projects");
  }
  function handleClickAbout() {
    navigate("/aboutme");
  }
  function handleClickName() {
    navigate("/");
  }
  console.log(props.page);

  return (
    <ThemeProvider theme={props.theme}>
      <Box>
        <AppBar position={props.page === "singleProj" ? "static" : "fixed"}>
          <Toolbar>
            <div className={classes.container}>
              <Typography className={classes.typo} onClick={handleClickName}>
                Ali Abdullah
                <HomeIcon />
              </Typography>
            </div>
            <MenuIcon className={classes.topdown} onClick={expand}>
              TOPDOWN
            </MenuIcon>
            <div className={classes.buttonGroup}>
              <ul className={isExpanded?classes.ulExpanded:classes.ul}>
                <li className={classes.li}>
                  <Button
                    onClick={handleClickProj}
                    color="primary"
                    variant="contained"
                    disabled={props.page === "projects" ? true : false}
                    className={classes.button}
                  >
                    Projects
                  </Button>
                </li>
                <li className={classes.li}>
                  <Button
                    onClick={handleClickAbout}
                    color="primary"
                    variant="contained"
                    disabled={props.page === "about" ? true : false}
                    className={classes.button}

                  >
                    About Me
                  </Button>
                </li>
              </ul>
            </div>
          </Toolbar>
        </AppBar>
      </Box>
    </ThemeProvider>
  );
}
