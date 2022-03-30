import {
  makeStyles,
  Box,
  Button
} from "@material-ui/core";

import helloAnimation from '../assets/gif/hello.gif';
import helloLogo from "../assets/images/hello.svg";
import '../App.css';
import clsx from 'clsx';
import { saveAs } from "file-saver";
import resume from "../assets/pdf/resume.pdf"


;

const useStyles = makeStyles((theme) => ({
  helloImage: {
    marginLeft: "1.5%",
    marginRight: "1.5%",
  },
  downloadButton:{
    backgroundColor:"#2F80ED",
    color: "#FFFFFF",
    width: "max-content",
    padding:"1%",
    marginTop: "3%"
  }
}));

const saveFile = () => {
  saveAs(
    resume,
    "Akanksha_Singh_Resume.pdf"
  );
};


function Home(props) {
  const classes = useStyles();
  const pageTheme = props.pageTheme;
  return (
    <div  style={{ background: pageTheme.palette.background.default }} id="Home">
      <Box sx={{ justifyContent: 'space-around', display: 'flex', flexWrap: 'wrap', alignItems: 'center', paddingTop: "7%",  paddingBottom: "10%" }}>
        <Box sx={{ alignContent: 'flex-start', display: 'flex', flexDirection: 'column', }}>
          <h3 >
            Hi There, 
            <img src={helloLogo} alt="loading" width="5%" className={clsx(classes.helloImage, "handMove")}/>
            I'm
        </h3>

          <h1 >
            Akanksha Singh
        </h1>
          <h3 style={{ color: pageTheme.h3.color }} >
            Software Developer
        </h3>
        <Button className={classes.downloadButton} onClick={saveFile}>See my Resume</Button>

        </Box>
        <img src={helloAnimation} alt="loading..." width="50%" />
      </Box>

    </div>
  );
}

export default Home;
