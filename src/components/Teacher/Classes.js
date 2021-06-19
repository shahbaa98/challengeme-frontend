import {useHistory} from "react-router-dom";
import {RiLogoutBoxLine} from "react-icons/ri";
import img from '../imgs/image3.png'
import '../style.css'
import React, { useReducer,useState } from "react";
import classes from "../imgs/class-icon.jpg";
import newclass from "../imgs/add.png"




const Classes = () => {
    const history = useHistory();
    const logout = () => {
        history.push('./');
    }

    return (
        <div className="app-com">
            <div>
                <div align ="left" onClick={()=> {history.push('/TeacherProfile')}}>
                    &lt;  אחורה
                </div>
            </div>
            <h1>הכיתות שלי</h1>
            <div className="Newclass">
                <img   src = {newclass} onClick={()=> {history.push('/Newclass')}}/>
                <div className="top-right">שייך לכיתה חדשה</div>
                <br/>
            </div>

        </div>

    )
}
export default Classes
