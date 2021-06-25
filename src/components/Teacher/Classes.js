import {useHistory} from "react-router-dom";
import {RiLogoutBoxLine} from "react-icons/ri";
import img from '../imgs/image3.png'
import '../style.css'
import React, { useReducer,useState } from "react";
import classes from "../imgs/class-icon.jpg";
import newclass from "../imgs/add.png"
import rectangle from "../imgs/Rectangle 28.png"




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
                <div >שייך לביתה חדשה</div>
                <br/>
            </div>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <div className="ClassName">
                <div><span className="verticalMiddle" onClick={()=> {history.push('/Class1')}}>כיתה י"א 1</span></div>
            </div>
            <br/>
            <br/>
            <div className="ClassName">
                <div><span className="verticalMiddle" onClick={()=> {history.push('/Class2')}}>כיתה י"א 2</span></div>
            </div>
            <br/>
            <br/>
            <div className="ClassName ">
                <div><span className="verticalMiddle" onClick={()=> {history.push('/Class3')}}>כיתה י"ב </span></div>
            </div>
            <br/>
            <br/>
            <div className="ClassName ">
                <div><span className="verticalMiddle" onClick={()=> {history.push('/Class4')}}>כיתה י' 1 </span></div>
            </div>


        </div>

    )
}
export default Classes
