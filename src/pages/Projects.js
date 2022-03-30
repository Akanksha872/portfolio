import {
  makeStyles,
  Box
} from "@material-ui/core";
import { pageHeight } from "../constant";
import Line from "../component/line";
import project1 from "../assets/images/project1.png";
import githubLogo from "../assets/images/githubLink.png";
import webLink from "../assets/images/webLink.png";
import '../App.css';

const height = pageHeight;
const PROJECT_LIST = [{
  title: "Case Change VS Code Extension",
  githubLink: "https://github.com/Akanksha872/changeCaseVsExtension",
  projectLink: "https://marketplace.visualstudio.com/items?itemName=AkankshaSingh872.case-change",
  image: project1,
  imageWidth: 700,
  description: "A VS code extension that allows to convert case of the selected text. Available on Visual Studio Marketplace and having 4000+ installs."

}];
const useStyles = makeStyles((theme) => ({
  fullHeight: {
    minHeight: height,
    paddingTop: '4rem',
    height: "max-content"
  },
  descriptionBox: {
    backgroundColor: "#2F80ED",
    color: "#FFFFFF",
    fontSize: "1.4rem",
    padding: "1rem",
    width: "110%",
    marginTop: "1rem"
  },
}));

function Projects(props) {
  const classes = useStyles();
  const pageTheme = props.pageTheme;
  return (
    <div
      className={classes.fullHeight} style={{ background: pageTheme.palette.background.default }} id="Projects">
      <Line pageTheme={pageTheme} text="Projects"></Line>
      <Box
        className="projectBox"
        sx={{ justifyContent: 'center', display: 'flex', flexDirection: "column", alignItems: 'center', paddingTop: "2rem" }}>
        {PROJECT_LIST.map((item, index) => (
          <Box
            key={index}
            sx={{ justifyContent: 'center', display: 'flex', alignItems: 'center', flexDirection: index % 2 == 0 ? "row" : "row-reverse", width: "70%", marginTop: "5rem", marginBottom: "5rem" }}
          >
            <img src={item.image} alt="loading" width={item.imageWidth} />
            <Box sx={{ justifyContent: index % 2 ? "flex-start" : 'flex-end', display: 'flex', flexDirection: "column", alignItems: index % 2 ? "flex-start" : 'flex-end' }}>
              <h3>{item.title}</h3>
              <Box className={classes.descriptionBox}
                sx={{ justifyContent: 'space-evenly', display: 'flex', flexDirection: "column", alignItems: 'center' }} >
                <p>{item.description}</p>
                <div>
                  <a href={item.githubLink} target="_blank" className="p-1"> <img src={githubLogo} alt="loading" /></a>
                  <a href={item.webLink} target="_blank" className="p-1"> <img src={webLink} alt="loading" /></a>
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
