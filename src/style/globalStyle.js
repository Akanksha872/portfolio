import { makeStyles } from '@material-ui/core/styles';

const globalUseStyles = makeStyles((theme) => ({
  redButton:{
    color:'red',
    background:'#fff',
    border:'1px solid red',
    '&:hover':{
      background:'red',
      color:'#fff'
    }
  },
  greentButton:{
    color:'green',
    background:'#fff',
    border:'1px solid green',
    '&:hover':{
      background:'green',
      color:'#fff'
    }
  },
  moveToForward: {
    position: "relative",
    animationName: "moveToForward",
    animationDuration: "5s",
    animationIterationCount: "1",
}

}));

export default globalUseStyles