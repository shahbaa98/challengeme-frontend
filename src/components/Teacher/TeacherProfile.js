import { RiLogoutBoxLine } from 'react-icons/ri';
import { useHistory } from 'react-router-dom';
import img from '../imgs/image3.png'
import '../style.css'
import profile from "../imgs/personalPhoto.png";
import chat from "../imgs/messages.gif";
import notification from "../imgs/notification.gif";
import addStudent from "../imgs/transparent-add-user.png"
import class1 from "../imgs/transparent-classroom.png"
import searchStudent from "../imgs/1024px-Search_Icon.svg.png"
import addNewChall from  "../imgs/new.png"
import {Form} from "reactstrap";
import React from "react";
import { useAuth } from '../../contexts/UserContext';
import {logout} from '../../actions/logout';
import {useFetch} from "../../useAPI";
import {makeStyles, withStyles} from "@material-ui/core";
import {pink} from "@material-ui/core/colors";
import Button from "@material-ui/core/Button";
import "./styleAlerts.css"
import axios from "axios";


const TeacherProfile = () => {
   const { data } = useFetch("teacher/classes/", []);

    const { deauthenticate, userprofile } = useAuth();
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

    const uploadedImage = React.useRef(null);
    const imageUploader = React.useRef(null);

    const handleImageUpload = e => {
        const [file] = e.target.files;
        if (file) {
            const reader = new FileReader();
            const { current } = uploadedImage;
            current.file = file;
            reader.onload = e => {
                current.src = e.target.result;
            };
            reader.readAsDataURL(file);
        }
        fetch(
            'http://127.0.0.1:8000/',
            {
                method: 'POST',
                body: data,
            }
        )
            .then((response) => response.json())
            .then((result) => {
                console.log('Success:', result);
            })
            .catch((error) => {
                console.error('Error:', error);
            });
    };

    return(
        <form className="app-com">
            {console.log(userprofile)}
            <div>
                <br/>
                <div align ="left" onClick={handleLogout}>
                    <button className="button"> <RiLogoutBoxLine /> התנתק </button>
                </div>
                <div>
                    <h1 className="text">{userprofile.first_name} {userprofile.last_name} שלום </h1>
                </div>
                <div
                    style={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "right",
                        justifyContent: "right",
                        top:"20px",
                        position:"fixed"
                    }}
                >
                    <input
                        type="file"
                        accept="image/*"
                        onChange={handleImageUpload}
                        ref={imageUploader}
                        style={{
                            display: "none"
                        }}
                    />
                    <div
                        style={{
                            height: "60px",
                            width: "60px",
                            border: "cover",
                            right:"10px",
                            position:"fixed"
                        }}
                        onClick={() => imageUploader.current.click()}
                    >
                        <img
                            ref={uploadedImage}
                            style={{
                                width: "150px",
                                height: "150px",
                                borderRadius:"50%",
                                right: "10px",
                                position:"fixed",
                                objectFit: "cover",
                            }}
                        />
                    </div>
                </div>

            </div>
            <br/>
            <div className="addStudent">
                <br/>
                <img     width= '200px' height='180px' src = {addStudent} onClick={()=> {history.push('/addStudent')}}/>
                <br/>
                <ColorButton variant="contained" color="primary" className={classes.margin} onClick={() => {
                    history.push('/addStudent')
                }}>
                    הוסיף תלמיד
                </ColorButton>
            </div>
            <div className="classes">
                <br/>
                <img     width= '200px' height='180px' src = {class1} onClick={()=> {history.push('/classes')}}/>
                <ColorButton variant="contained" color="primary" className={classes.margin} onClick={() => {
                    history.push('/classes')
                }}>
                    כיתות שלי
                </ColorButton>
                <br/>
                <br/>
                <br/>
            </div>
        </form>

    )
}

export default TeacherProfile
