import * as React from "react";
import AppBar from "@material-ui/core/AppBar";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import HomeIcon from '@material-ui/icons/Home';
import Toolbar from "@material-ui/core/Toolbar";
import { makeStyles, ThemeProvider} from "@material-ui/core";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import { useNavigate } from "react-router";

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
  };
});


export default function Header(props) {
  const classes = useStyles();
  const navigate = useNavigate();

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
        <AppBar position={props.page==="singleProj"?"static":"fixed"}>
          <Toolbar>
            <Typography className={classes.typo} onClick={handleClickName}>
              Ali Abdullah
              <HomeIcon/>
            </Typography>
            <ButtonGroup className={classes.buttonGroup}>
              <Button
                onClick={handleClickProj}
                color="primary"
                variant="contained"
                disabled={props.page === "projects" ? true : false}
              >
                Projects
              </Button>
              <Button
                onClick={handleClickAbout}
                color="primary"
                variant="contained"
                disabled={props.page === "about" ? true : false}
              >
                About Me
              </Button>
            </ButtonGroup>
          </Toolbar>
        </AppBar>
      </Box>
    </ThemeProvider>
  );
}
