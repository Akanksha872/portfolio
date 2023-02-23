import {
  makeStyles,
  Box
} from "@material-ui/core";

import Line from "../component/line";
import project1 from "../assets/images/project2.png";
import githubLogo from "../assets/images/githubLink.png";
import webLink from "../assets/images/webLink.png";
import '../App.css';

;
const PROJECT_LIST = [{
  title: "Case Change VS Code Extension",
  githubLink: "https://github.com/Akanksha872/changeCaseVsExtension",
  projectLink: "https://marketplace.visualstudio.com/items?itemName=AkankshaSingh872.case-change",
  image: project1,
  imageWidth: "60%",
  description: "A VS code extension that allows to convert case of the selected text. Available on Visual Studio Marketplace and having 8000+ installs."

}];
const useStyles = makeStyles((theme) => ({
  descriptionBox: {
    backgroundColor: "#2F80ED",
    color: "#FFFFFF",
    fontSize: "1.2vw",
    padding: "2%",
    width: "110%",
    marginTop: "5%"
  },
  logoSize: {
    width: '2vw',
  },
  imagePadding:{
    paddingLeft: "30px"
  }
}));  

function Projects(props) {
  const classes = useStyles();
  const pageTheme = props.pageTheme;
  return (
    <div
      style={{ background: pageTheme.palette.background.default }} id="Projects">
      <Line pageTheme={pageTheme} text="Projects"></Line>
      <Box
        className="projectBox"
        sx={{ justifyContent: 'center', display: 'flex', flexDirection: "column", alignItems: 'center', paddingTop: "7%", paddingBottom: "10%" }}>
        {PROJECT_LIST.map((item, index) => (
          <Box
            key={index}
            sx={{ justifyContent: 'center', display: 'flex', alignItems: 'center', flexDirection: index % 2 == 0 ? "row" : "row-reverse", width: "70%", marginTop: "5%", marginBottom: "5%" }}
          >
            <img src={item.image} alt="loading" width={item.imageWidth} />
            <Box sx={{ justifyContent: index % 2 ? "flex-start" : 'flex-end', display: 'flex', flexDirection: "column", alignItems: index % 2 ? "flex-start" : 'flex-end' }}>
              <h3>{item.title}</h3>
              <Box className={classes.descriptionBox}
                sx={{ justifyContent: 'space-evenly', display: 'flex', flexDirection: "column", alignItems: 'center' }} >
                <p>{item.description}</p>
                <div>
                  <a href={item.githubLink} target="_blank" className={classes.imagePadding}> <img src={githubLogo} alt="loading" className={classes.logoSize} /></a>
                  <a href={item.projectLink} target="_blank"className={classes.imagePadding} > <img src={webLink} alt="loading" className={classes.logoSize} /></a>
                </div>
              </Box>
            </Box>
          </Box>
        ))}
      </Box>
    </div>
  );
}

export default Projects;
