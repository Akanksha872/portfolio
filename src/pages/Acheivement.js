import {
  makeStyles,
  Box
} from "@material-ui/core";
import Line from "../component/line";
import acheivementBG from "../assets/images/acheivementBG.jpeg";
import acheivement1 from "../assets/images/acheivement1.jpeg";
import acheivement2 from "../assets/images/acheivement2.jpeg";
import acheivement3 from "../assets/images/acheivement3.jpeg";


;

const ACHEIVEMENT_DATA_LIST = [
  {
    title: "Winner Of Hashathon, 2019",
    image: acheivement1,
    imageWidth: '500vw',
    description: [
      "Hashedin organized a Saas theme 24 hour hackathon named Hashathon. I participated with a team of 3 other people and won 20,000 cash prize.",
      "Project Idea: Develop an interface that will show the commands used in command lines and associate them with github commit and JIRA ID. A automated kind of documentation will be created that will show what commands have been used in any particular JIRA issues.",
      "Tech Used: Angular, kafka, python"
    ]
  },
  {
    title: "Runner up Of SIH, 2018",
    image: acheivement2,
    imageWidth: 500,
    description: [
      "Govenment organized a Smart India Hackathon with  various ministries, department and organization. I participated with a team of 4 other people and won Summer Internship in ISRO for 3 months.",
      "Project Idea: Our problem statement was under ISRO, to develop an interactive interface that will use the given Satellite geographic dataset of the villages to help scientics in their research. ",
      "Tech Used: Google Dailog flow, Android, AR"
    ]
  },
  {
    title: "College Topper, 2016",
    image: acheivement3,
    imageWidth: 500,
    imageHeight: 380,
    description: [
      "I secured first rank in the college during First year, 2015-2016.",
      "I always focused on learning and understanding subjects thorougthly. I had Physics, Chemistry, C++, Maths, Mechanics, Electrical and Electronics during the session.",
      ""
    ]
  },
]

const useStyles = makeStyles((theme) => ({

  contentText: {
    color: "#FFFFFF",
  },
  imageSize:{
    width: "25vw",
    height: "25vw"
  }
}));

function Acheivement(props) {
  const classes = useStyles();
  const pageTheme = props.pageTheme;
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', flexWrap: 'wrap', }}
      style={{ backgroundImage: `url(${acheivementBG})` }} id="Acheivement">
      <div><Line pageTheme={pageTheme} text="Acheivements"></Line></div>
      <Box sx={{ justifyContent: 'space-around', display: 'flex', flexWrap: 'wrap', alignItems: 'center', paddingTop: "7%", paddingBottom: "10%", marginLeft: "3%", marginRight: "3%" }} className="pt-4" >
        {ACHEIVEMENT_DATA_LIST.map((item, index) => (
          <div className="content" key={index}>
            <div className="content-overlay"></div>
            <img src={item.image} alt="loading" className={classes.imageSize}/>
            <div className="content-details fadeIn-bottom">
              <h3 className={classes.contentText}>{item.title}</h3>
              {item.description.map((item, index) => (
                <p className={classes.contentText} key={index}>{item}</p>
              ))}
            </div>
          </div>

        ))}
      </Box>
    </Box>
  );
}

export default Acheivement;