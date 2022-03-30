import {
  AppBar,
  Toolbar,
  makeStyles,
  Box
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  header: {
    backgroundColor: "#2F80ED",
    height: '3vw'
  },
  logo: {
    flexGrow: "1",
    cursor: "pointer",
  },
  link: {
    color: '#FFFFFF',
    textDecoration: "none",
    "&:hover": {
      color: "#1C1F47",
      borderBottom: "1px solid #1C1F47",
      fontWeight: "bold"
    },
    "&:active": {
      color: "#1C1F47",
      borderBottom: "1px solid #1C1F47",
      fontWeight: "bold"
    },
  },
}));

function Header() {
  const classes = useStyles();
  return (
    <AppBar position="sticky">
      <Box sx={{ justifyContent: 'space-evenly', display: 'flex', alignItems: 'center' }} className={classes.header}>
        <a href="#Home" className={classes.link}><h5>Home</h5></a>
        <a href="#About" className={classes.link}> <h5>About</h5></a>
        <a href="#WorkExperience" className={classes.link}><h5>Work Experience</h5> </a>
        <a href="#Skills" className={classes.link}><h5>Skills</h5></a>
        <a href="#Projects" className={classes.link}> <h5>Projects</h5></a>
        <a href="#Acheivement" className={classes.link}> <h5>Acheivements</h5></a>
        <a href="#Contact" className={classes.link}>  <h5>Contact me</h5></a>
      </Box>
    </AppBar>
  );
}

export default Header;
