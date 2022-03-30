import {
  makeStyles,
  Card,
  Typography,
  CardContent,
  LinearProgress,
  Box
} from "@material-ui/core";
import { pageHeight } from "../constant";
import Line from "../component/line";
import vmwareLogo from "../assets/images/vmware.png";
import hashedinLogo from "../assets/images/hashedin1.jpeg";
import isroLogo from "../assets/images/isro.png";
import '../App.css';


const height = pageHeight;

const WORK_EXPERIENCE_LIST = [{
  title: "MEMBER OF TECHNICAL STAFF II",
  from: "Apr, 2021 - Present",
  duration: "1 Year",
  organization: "Vmware, Bangalore",
  image: vmwareLogo,
  imageWidth: 200,
  imageHeight: 200,
  journey: [{
    title: "MEMBER OF TECHNICAL STAFF II",
    from: "Apr, 2021 - Present",
  }],
  description: [
    "Majorly contributed in building their kubernetes cluster requesting/managing interface in Angular. I was responsible for the UX design along with the UI implementation and UI test cases.",
    "I worked on REST APIs  using Flask to implement  new APIs and implement OAuth in one of the backend application. ",
    "Manage kubernetes clusters of the tenants when faced issues.",
    "Tech - Angular, Clarity, Flask, Kubernetes, Docker, Figma"
  ]
}, {
  title: "SOFTWARE ENGINEER  II",
  from: "Feb, 2019 - Mar, 2021",
  duration: "1 year 9 months",
  organization: "Hashedin by Deloitte, Bangalore",
  image: hashedinLogo,
  imageWidth: 200,
  imageHeight: 200,
  journey: [{
    from: "Jan, 2021 - Mar, 2021",
    title: "SOFTWARE ENGINEER  II"
  },
  {
    from: "July, 2019 - Dec, 2020",
    title: "SOFTWARE ENGINEER"
  }, {
    from: "Feb, 2019 - Jun, 2019",
    title: "SDE INTERN"
  }],
  description: [
    "Joined as an intern in Hashedin, and developed an Real Time Multiplayer Quiz Interface as Internship final Project using Angular, Django, firebase.",
    "Worked with multiple projects, clients and technology as Software Engineer. ",
    "Unisys- Cloud Navigator and CMS -Developed web app in angular which helps user to evaluate their exsisting cloud architecture and developed their own Content Management System.",
    "Manipal -MS Office Simulator Assessment web application -Developed web app using React JS which provides MS Office simulation, a whole new way of assessment and show test result to candidate.  ",
    "Ashirvad Pipes- Shopping Reward point Application - Developed React Native app in which user can upload bills and claims the rewards based on purchase.",
    "Tech - ReactJs, Firebase, Angular, React Native , Django, Docker"
  ]
}, {
  title: "SDE INTERN",
  from: "Jun, 2018 - Aug, 2018",
  duration: "3 Months",
  organization: "Space Application Center, ISRO, Ahmedabad",
  image: isroLogo,
  imageWidth: 200,
  imageHeight: 200,
  journey: [
    {
      title: "SDE INTERN",
      from: "Jun, 2018 - Aug, 2018",
    }
  ],
  description: [
    "I worked on converting their existing research data collection Android application into Cross platform mobile application(Android & iOS).",
    "Tech - React Native"
  ]
}]

const useStyles = makeStyles((theme) => ({
  fullHeight: {
    minHeight: height,
    paddingTop: '4rem'
  },
  greyText:{
    color:"#828282"
  },
  card:{
    width: "60rem"
  },
  journey:{
    width: "25rem"
  }
}));

function WorkExperience(props) {
  const classes = useStyles();
  const pageTheme = props.pageTheme;
  return (
    <div className={classes.fullHeight} style={{ background: pageTheme.palette.background.default }} id="WorkExperience">
      <Line pageTheme={pageTheme} text="Work Experience"></Line>
      <Box
      className="workExperienceBox"
        sx={{ justifyContent: 'center', display: 'flex', flexDirection: "column", alignItems: 'center', paddingTop: "4rem" , paddingBottom: "6rem" }}>
        {WORK_EXPERIENCE_LIST.map((item, index) => (
          <Box
          key={index}
            sx={{ justifyContent: 'center', display: 'flex', flexDirection: "row", alignItems: 'center', paddingTop: "2rem" }}>
            <div className={classes.journey}>
              {
                item.journey.map((journey, index) => (

                  <div className="p-1" key={index}>
                    <Typography sx={{ fontSize: 12 }} >
                      <b>{journey.title}</b>
                    </Typography>
                    <Typography sx={{ fontSize: 12 }} className={classes.greyText}>
                      {journey.from}
                    </Typography>
                  </div>
                ))
              }
            </div>
            <Card className={classes.card} >
              <CardContent>

                <Typography sx={{ fontSize: 12 }}>
                  <b>{item.organization}</b>  ({item.duration})
                </Typography>


                <img src={item.image} alt="loading" width={item.imageWidth} height={item.imageHeight} />

                {item.description.map((para, index) => (
                  <Typography sx={{ fontSize: 12 }} key={index}>
                    {para}
                  </Typography>
                ))}

              </CardContent>

            </Card>
            <LinearProgress />

          </Box>

        ))}
      </Box>
    </div >
  );
}

export default WorkExperience;
