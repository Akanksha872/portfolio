import "../App.css";
import {
  makeStyles,
  Box
} from "@material-ui/core";

import Line from "../component/line";
import profile from "../assets/images/profile.png";
import abouticon from "../assets/images/about.png";

;

const useStyles = makeStyles((theme) => ({
  textWidth: {
    width: "50%"
  },
  aboutText: {
    fontSize: "1.5vw"
  },
  aboutHeight: {
    height: "80%"
  }
}));

function About(props) {
  const classes = useStyles();
  const pageTheme = props.pageTheme;
  return (
    <div style={{ background: pageTheme.palette.background.default }} id="About">
      <Line pageTheme={pageTheme} text="About"></Line>
      <Box sx={{ justifyContent: 'space-around', display: 'flex', flexWrap: 'wrap', alignItems: 'center',paddingTop: "7%",  paddingBottom: "10%"  }}
        className={classes.aboutHeight}
        id="aboutBox">
        <img src={abouticon} alt="loading" width="10%"/>
        <img src={profile} alt="loading" width="20%" />
        <span style={{ color: props.pageTheme.palette.primary.main }} className={classes.textWidth}>
          <p className={classes.aboutText}>
            Hello! My name is Akanksha Singh and I enjoy creating things that live on the internet.
            I am a Software Developer with front end development skills.
         </p>

          <p className={classes.aboutText}>
            I did my engineering in Computer Science from G.L. Bajaj Institute of Technology and Management,
            Greater Noida in 2015-2019.
          </p>

          <p className={classes.aboutText}>
            Fast-forward to today, and I had the privilege of working in a start-up, a big MNC and space
            organization with total work experience of 3 years. I'm happiest when I'm creating, learning, exploring
            and thinking about how to make things better.
         </p>

          <p className={classes.aboutText}>
            Being a diligent, hardworking and result oriented person, I always work towards achieving best
            result on each project I lay my hands on.
          </p>

          <p className={classes.aboutText}>
            Apart from tech, I love travelling, painting canvas, cooking delicious food, reading books.
         </p>
        </span>
      </Box>
    </div>
  );
}

export default About;
