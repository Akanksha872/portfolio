import "../App.css";
import {
    makeStyles,
    Box
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    line: {
        borderRadius: '1rem',
        display: 'inline-block',
        width: '50%',
        borderTop: '0.3rem solid'
    }
}));

function Line(props) {
    const classes = useStyles();
    const flexDirection = props.pageTheme.isWhite ? 'row' : 'row-reverse'
    return (
        <Box sx={{ justifyContent: 'space-around', display: 'flex', flexWrap: 'wrap', alignItems: 'center', flexDirection: flexDirection }} className="pt-1">
            <span className={classes.line} style={{ borderColor: props.pageTheme.palette.primary.main }}></span>
            <h3 style={{ color: props.pageTheme.palette.primary.main }}>
                {props.text}
            </h3>
        </Box>
    );
}

export default Line;
