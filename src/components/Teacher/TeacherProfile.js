import { RiLogoutBoxLine } from 'react-icons/ri';
import { useHistory } from 'react-router-dom';
import img from '../imgs/image3.png'
import '../style.css'
import profile from "../imgs/personalPhoto.png";
import chat from "../imgs/messages.gif";
import notification from "../imgs/notification.gif";
import addStudent from "../imgs/add_user-512.png"
import classes from "../imgs/class-icon.jpg"
import searchStudent from "../imgs/1024px-Search_Icon.svg.png"
import addNewChall from  "../imgs/new.png"
import {Form} from "reactstrap";
import React from "react";
import { useAuth } from '../../contexts/UserContext';
import {logout} from '../../actions/logout';
import {useFetch} from "../../useAPI";


const TeacherProfile = () => {
   // const { data } = useFetch("teacher/classes/", []);

    const { deauthenticate, userprofile } = useAuth();
    const history = useHistory();
    const handleLogout = e => {
        e.preventDefault();
        const response = logout();
        deauthenticate(response.data);
        localStorage.clear();
        history.push('/');
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
            </div>

            <div>
                <img className="profileImg"  src={img} alt="" />
            </div>
            {/*<div align="right" dir="rtl">
                <label htmlFor="fileImgStudent">
                    <img className="profileImg" src={profile}/>
                </label>
            </div>*/}

            <br/>
            <div className="addStudent">
                <h5 className="text"> הוסיף תלמיד</h5>
                <img     width= '200px' height='180px' src = {addStudent} onClick={()=> {history.push('/addStudent')}}/>
                <br/>
            </div>
            <div className="classes">
                <h5 className="text"> כיתות שלי</h5>

                <img     width= '200px' height='180px' src = {classes} onClick={()=> {history.push('/classes')}}/>
                <br/>
                <br/>
                <br/>
            </div>
        </form>

    )
}

export default TeacherProfile
