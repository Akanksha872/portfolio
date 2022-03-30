import {
  AppBar,
  Toolbar,
  makeStyles,
  Box
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  header: {
    backgroundColor: "#2F80ED",
    height: '3rem'
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
          <a href="#Home" className={classes.link}>Home</a>
          <a href="#About" className={classes.link}> About</a>
          <a href="#WorkExperience" className={classes.link}>Work Experience </a>
          <a href="#Skills" className={classes.link}>Skills</a>
          <a href="#Projects" className={classes.link}> Projects</a>
          <a href="#Acheivement" className={classes.link}> Acheivements</a>
          <a href="#Contact" className={classes.link}>  Contact me</a>
        </Box>
    </AppBar>
  );
}

export default Header;
