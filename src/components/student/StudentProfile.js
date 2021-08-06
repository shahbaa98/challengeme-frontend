import { RiLogoutBoxLine } from 'react-icons/ri';
import { useHistory } from 'react-router-dom';
import '../style.css'
import profile from '../imgs/personalPhoto.png'
import chat from '../imgs/transparent-msg icon (1).png'
import challenge from '../imgs/transparent-challenge icon.png'
import notification from '../imgs/transparent-notifications icon (3).png'
import { useAuth } from '../../contexts/UserContext';
import {logout} from '../../actions/logout';
import React from "react";
import img from "../imgs/image3.png";
import Button from "@material-ui/core/Button";
import {makeStyles, withStyles} from "@material-ui/core";
import {pink} from "@material-ui/core/colors";


const StudentProfile = () => {
    const {deauthenticate, userprofile} = useAuth();
    const history = useHistory();


    const handleLogout = e => {
        e.preventDefault();
        const response = logout();
        deauthenticate(response.data);
        localStorage.clear();
        history.push('/');
    };
    const ColorButton = withStyles((theme) => ({
        root: {
            color: theme.palette.getContrastText(pink[200]),
            backgroundColor: pink[200],
            '&:hover': {
                backgroundColor: pink[400],
            },
        },
    }))(Button);

    const useStyles = makeStyles((theme) => ({
        margin: {
            margin: theme.spacing(1),
        },
    }));
    const classes = useStyles();

        return (

            <div className="app-com">
                <div>
                    <div align="left" onClick={handleLogout}>
                        <button className="button"><RiLogoutBoxLine/> התנתק</button>
                    </div>

                    <div>
                        <img className="profileImg" src={img} alt=""/>
                    </div>
                    <div className="text">
                        {userprofile ? userprofile.role : "Not authenticated"}
                        {console.log(userprofile)}
                    </div>
                    <div>
                        <h1 className="text">{userprofile.first_name} {userprofile.last_name} שלום </h1>

                    </div>
                </div>
                <div className="challenge">
                    <img width='200px' height='180px' src={challenge} onClick={() => {
                        history.push('/challenges')
                    }}/>
                    <ColorButton variant="contained" color="primary" className={classes.margin} onClick={() => {
                        history.push('/challenges')
                    }}>
                        האתגרים שלי
                    </ColorButton>
                    <br/>
                </div>
                <div className="notification1">
                    <img width='200px' height='180px' src={notification} onClick={() => {
                        history.push('/notification')
                    }}/>
                    <br/>
                    <ColorButton variant="contained" color="primary" className={classes.margin} onClick={() => {
                        history.push('/notification')
                    }}>
                        התראות
                    </ColorButton>

                    <br/>
                </div>
                <div className="chat">
                    <img width='200px' height='180px' src={chat} onClick={() => {
                        history.push('/Chat1')
                    }}/>
                    <br/>
                    <ColorButton variant="contained" color="primary" className={classes.margin} onClick={() => {
                        history.push('/Chat1')
                    }}>
                      הודעות
                    </ColorButton>
                    <br/>
                </div>
            </div>
        )
}
export default StudentProfile
