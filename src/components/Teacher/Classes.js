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
            {submitting &&
            <div>
                You are submitting the following:
                <ul>
                    {Object.entries(formData).map(([name, value]) => (
                        <li key={name}><strong>{name}</strong>:{value.toString()}</li>
                    ))}
                </ul>
            </div>
            }
            <br/><br/>
            <div className="classes">
                <div className="myClasses">הכיתות שלי</div>
                <div className="col-12 justify-content-center">
                    <div className="row mp0 flex-container containerClasses">
                        <div className="classNameHome classStudentHome" dir="rtl">
                            <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24"
                                 className="closeIcon" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"></path>
                            </svg>
                            <span className="verticalMiddle"> כיתה יא' 1</span></div>
                        <div className="classNameHome classStudentHome" dir="rtl">
                            <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24"
                                 className="closeIcon" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"></path>
                            </svg>
                            <span className="verticalMiddle"> כיתה יא' 2</span></div>
                        <div className="classNameHome classStudentHome" dir="rtl">
                            <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24"
                                 className="closeIcon" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"></path>
                            </svg>
                            <span className="verticalMiddle"> כיתה י' 1</span></div>
                    </div>
                </div>
            </div>
            <div className="Newclass">
                <div >שייך לכיתה חדשה</div>
                <img     width= '200px' height='180px' src = {newclass} onClick={()=> {history.push('/classes')}}/>
                <br/>
            </div>
        </div>
    )
}
export default Classes
