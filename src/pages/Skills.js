import {
  makeStyles,
  Box
} from "@material-ui/core";
import Line from "../component/line";
import '../App.css';
import clsx from 'clsx';
import { HexGrid, Layout, Hexagon, Text, Pattern, Path, Hex, GridGenerator } from 'react-hexgrid';

;

const SKILLS_LIST = [
  {
    name: "Angular",
    q: -3, // dailogal up
    r: 1, // up
    s: -5,
    class: "lightBlue",
  }, {
    name: "ReactJS",
    q: -1,
    r: -1,
    s: 0,
    class: "darkBlue"
  }, {
    name: "React Native",
    q: -2,
    r: 0,
    s: 10,
    class: "blue"
  }, {
    name: "CSS",
    q: -2,
    r: 1,
    s: 1,
    class: "darkBlue"
  }, {
    name: "Git",
    q: -2,
    r: 2,
    s: 1,
    class: "blue"
  }, {
    name: "Typescript",
    q: 2,
    r: 0,
    s: 1,
    class: "darkBlue"
  }, {
    name: "Jquery",
    q: -1,
    r: 0,
    s: 1,
    class: "lightBlue"
  }, {
    name: "HTML",
    q: -1,
    r: 1,
    s: 1,
    class: "darkBlue"
  }, {
    name: "Bootstrap",
    q: -1,
    r: 2,
    s: 1,
    class: "lightBlue"
  }, {
    name: "Figma",
    q: 3,
    r: -2,
    s: 1,
    class: "lightBlue"
  }, {
    name: "Karma",
    q: 0,
    r: -1,
    s: 1,
    class: "darkBlue"
  }, {
    name: "Redux",
    q: 0,
    r: 0,
    s: 1,
    class: "blue"
  }, {
    name: "Restful APIs",
    q: 0,
    r: 1,
    s: 1,
    class: "lightBlue"
  }, {
    name: "Docker",
    q: 2,
    r: -1,
    s: 1,
    class: "lightBlue"
  }, {
    name: "Kubernetes",
    q: 1,
    r: -2,
    s: 1,
    class: "blue"
  }, {
    name: "Flask",
    q: 1,
    r: -1,
    s: 1,
    class: "lightBlue"
  }, {
    name: "Python",
    q: 1,
    r: 0,
    s: 1,
    class: "darkBlue"
  }, {
    name: "C/C++",
    q: 1,
    r: 1,
    s: 1,
    class: "blue"
  }, {
    name: "Javascript",
    q: 2,
    r: -2,
    s: 1,
    class: "darkBlue"
  }
]
const useStyles = makeStyles((theme) => ({
  badge: {
    backgroundColor: '#FFFFFF',
    border: '6px solid #2F80ED',
    borderRadius: '5rem',
    padding: '1rem',
    margin: '2rem',
    display: 'flex',
    justifyContent: 'center',
    width: 'max-content'
  },
  skillWidth: {
    width: '65%'
  },
  skillBoxHeight: {
    height: '90%',
    overflow: 'scroll'
  }
}));

function Skills(props) {
  const classes = useStyles();
  const pageTheme = props.pageTheme;
  const hexagonSize = { x: 5, y: 5 };
  return (
    <div
      style={{ background: pageTheme.palette.background.default }}
      id="Skills" >
      <Line pageTheme={pageTheme} text="Skills"></Line>
      <HexGrid width="100%" height="50%" viewBox="-50 -25 100 55" className="mt-1">
        <Layout size={hexagonSize} flat={true} spacing={1.1} origin={{ x: 0, y: 0 }}>
          {SKILLS_LIST.map((item, index) => (
            <Hexagon q={item.q} r={item.r} s={item.s} className={clsx(item.class)} key={item.name} id="skill-badge">
              <Text className="wrap">{item.name}</Text>
            </Hexagon>
          ))}
        </Layout>
      </HexGrid>
    </div>
  );
}

export default Skills;
