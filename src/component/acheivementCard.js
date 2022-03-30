import "../App.css";
import {
    makeStyles,
    Box
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    box: {
        borderRadius: '1rem',
        border: '0.4rem solid #2F80ED',
    },
    contentText: {
        color: "#FFFFFF",
    }
}));

function AcheivementCard(props) {
    const classes = useStyles();
    return (
        <div className="content">
            <div className={classes.box}>
                <div className="content-overlay"></div>
                <span>{props.children}</span>
                <div className="content-details fadeIn-bottom">
                    <h3 className={classes.contentText}>{props.data.title}</h3>
                    {props.data.description.map((item, index) => (
                        <p className={classes.contentText} key={index}>{item}</p>

                    ))}
                </div>
            </div>
        </div>


    );
}

export default AcheivementCard;