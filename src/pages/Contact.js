import {
  makeStyles,
  Box
} from "@material-ui/core";
import Line from "../component/line";

import emailImg from '../assets/images/email.png';
import githubImg from '../assets/images/github.png';
import linkedinImg from '../assets/images/linkedin.png';
import mediumImg from '../assets/images/medium.png';
import twitterImg from '../assets/images/twitter.png';

const SOCIAL_MEDIA_LIST = [{
  link: 'mailto:akankshasingh872@gmail.com',
  image: emailImg,
}, {
  link: 'https://twitter.com/Akanksha872',
  image: twitterImg,
}, {
  link: 'https://www.linkedin.com/in/akankshasingh872/',
  image: linkedinImg,
}, {
  link: 'https://medium.com/@akankshasingh872',
  image: mediumImg,
}, {
  link: 'https://github.com/Akanksha872',
  image: githubImg,
}];

const useStyles = makeStyles((theme) => ({

}));

function Contact(props) {
  const classes = useStyles();
  const pageTheme = props.pageTheme;
  return (
    <Box style={{ background: pageTheme.palette.background.default }} id="Contact">
      <Line pageTheme={pageTheme} text="Get in Touch" className="pb-2"></Line>
      <Box sx={{ justifyContent: 'space-evenly', display: 'flex', alignItems: 'center' }} className="pt-2 pb-2">
        {SOCIAL_MEDIA_LIST.map((item, index) => (
          <a href={item.link} target="_blank" key={index}> <img src={item.image} alt="loading" width={50}></img></a>
        ))}
      </Box>
      <Box sx={{ justifyContent: 'center', display: 'flex', alignItems: 'center' }}>
        <h5 style={{ color: pageTheme.palette.primary.main }} className="pt-1 pb-1">Designed & Built by Akanksha Singh</h5>
      </Box>

    </Box>
  );
}

export default Contact;
