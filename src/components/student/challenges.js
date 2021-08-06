import { useFetch } from "../../useAPI";
import '../style.css'
import { useHistory,useParams} from "react-router-dom";
import { useAuth } from '../../contexts/UserContext';
import StudentClass from "../Teacher/StudentClass";
import StudentProfile from "./StudentProfile";
import ArrowBack from "@material-ui/icons/ArrowBackIos";
import React from "react";
import {makeStyles, withStyles} from "@material-ui/core";
import Button from "@material-ui/core/Button";
import {purple} from "@material-ui/core/colors";



const Challenges = () => {
    const { userprofile } = useAuth();
    const params = useParams();
    const history = useHistory();
    const { data } = useFetch(`teacher/classes/1/student/${userprofile.id}/challanges/`, []);
    const ColorButton = withStyles((theme) => ({
        root: {
            color: theme.palette.getContrastText(purple[200]),
            backgroundColor: purple[200],
            '&:hover': {
                backgroundColor: purple[300],
            },
        },
    }))(Button);
    const useStyles = makeStyles((theme) => ({
        button: {
            margin: theme.spacing(1),
        },
    }));
    const classes = useStyles();

        return (
        <div className="app-com">
            <div align="left">
                <ColorButton
                    variant="contained"
                    color="pink"
                    className={classes.button}
                    startIcon={<ArrowBack />}
                    onClick={() => {
                    history.push('/StudentProfile')
                }}
                >
                    אחורה
                </ColorButton>
            </div>
        <br/>
        <br/>

            <h1 className="text1">
                האתגרים שלי
            </h1>
            <br/>
            {data.map((Challanges) => {
                return (
                    <div className="ClassName" style={{ marginBottom: 20 }}>
                        <div><span className="verticalMiddle" onClick={() => { history.push('/OneChallenge') }}>לעשות שיעורי בית עם חברים</span></div>
                    </div>
                )
            })}
        </div>
    )
}
export default Challenges
