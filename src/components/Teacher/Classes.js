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
                <div >שייך לכיתה חדשה</div>
                <br/>
            </div>
            <div className="ClassName one">
                <img src={rectangle} onClick={()=> {history.push('/Class1')}}/>
                <div> כיתה י"א 1</div>
            </div>
            <br/>
            <br/>
            <div className="ClassName two">
                <img src={rectangle} onClick={()=> {history.push('/Class2')}}/>
                <div> כיתה י"א 2</div>
            </div>
            <br/>
            <br/>
            <div className="ClassName three">
                <img src={rectangle} onClick={()=> {history.push('/Class3')}}/>
                <div> כיתה י"ב 1</div>
            </div>
            <br/>
            <br/>
            <div className="ClassName four">
                <img src={rectangle} onClick={()=> {history.push('/Class4')}}/>
                <div> י' 1</div>
            </div>


        </div>

    )
}
export default Classes
