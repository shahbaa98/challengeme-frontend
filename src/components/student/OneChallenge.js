import img from "../imgs/image3.png";
import done from "../imgs/V.png";
import help from "../imgs/transparent-help-icon.png";
import no from "../imgs/X.png"
import newchallenge from "../imgs/new.png";
import plan from "../imgs/plan.png";
import React from "react";
import {makeStyles, withStyles} from "@material-ui/core";
import {purple,green,red,yellow} from "@material-ui/core/colors";
import Button from "@material-ui/core/Button";
import ArrowBack from "@material-ui/icons/ArrowBackIos";
import {useAuth} from "../../contexts/UserContext";
import {useHistory, useParams} from "react-router-dom";

const OneChallenge = () => {
    const { userprofile } = useAuth();
    const params = useParams();
    const history = useHistory();

    // ------color buttons -------
    const ColorButton = withStyles((theme) => ({
        root: {
            color: theme.palette.getContrastText(purple[200]),
            backgroundColor: purple[200],
            '&:hover': {
                backgroundColor: purple[300],
            },
        },
    }))(Button);
    const ColorButton1 = withStyles((theme) => ({
        root: {
            color: theme.palette.getContrastText(green[500]),
            backgroundColor: green[500],
            '&:hover': {
                backgroundColor: green[900],
            },
        },
    }))(Button);
    const ColorButton2 = withStyles((theme) => ({
        root: {
            color: theme.palette.getContrastText(red[500]),
            backgroundColor: red[500],
            '&:hover': {
                backgroundColor: red[900],
            },
        },
    }))(Button);
    const ColorButton3 = withStyles((theme) => ({
        root: {
            color: theme.palette.getContrastText(yellow[700]),
            backgroundColor: yellow[700],
            '&:hover': {
                backgroundColor: yellow[900],
            },
        },
    }))(Button);
    //-------------
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
                        history.push('/challenges')
                    }}
                >
                    אחורה
                </ColorButton>
            </div>
            <h1 >
               לעשות שיעורי בית עם חברים
            </h1>
            <br/>
            <br/>
            <div className="done">
                <br/>
                <img width='160px' height='160px' src={done}  />
                <br/>
                <br/>
                <ColorButton1 variant="contained" color="primary" className={classes.margin}>
                  הצלחתי
                </ColorButton1>
                <br />
            </div>

            <div className="help">
                <br/>
                <img width='200px' height='180px' src={help} onClick={() => {
                    history.push('/notification')
                }}/>
                <br/>
                <br/>
                <ColorButton3 variant="contained" color="primary" className={classes.margin} onClick={() => {
                    history.push('/notification')
                }}>
                    צריך עזרה
                </ColorButton3>
                <br />
            </div>

            <div className="no ">
                <br/>
                <img width='230px' height='270px' src={no}  />
                <br/>

                <ColorButton2 variant="contained" color="primary" className={classes.margin}>
                    לא הצלחתי
                </ColorButton2>
                <br />
            </div>
        </div>)
}
export default OneChallenge
