import {useHistory} from "react-router-dom";
import {RiLogoutBoxLine} from "react-icons/ri";
import img from '../imgs/image3.png'
import '../style.css'
import React, { useReducer,useState } from "react";

const Class2 = () => {
    const history = useHistory();
    const logout = () => {
        history.push('./');
    }
    return (
        <div className="app-com">
            <div>
                <div align ="left" onClick={()=> {history.push('/Classes')}}>
                    &lt;  אחורה
                </div>
            </div>
            <h1>כיתה י"א 2</h1>
            <div className="col-12">
                <div className="row mp0 flex-container containerStudents">
                    <div className="studentHome classStudentHome" dir="rtl">
                        <span className="verticalMiddle" onClick={()=> {history.push('/StudentReportProfile')}}>חן לוי</span></div>
                    <div className="studentHome classStudentHome" dir="rtl">
                        <span className="verticalMiddle" onClick={()=> {history.push('/StudentReportProfile')}}>שירה ריבה</span></div>
                    <div className="studentHome classStudentHome" dir="rtl">
                        <span className="verticalMiddle" onClick={()=> {history.push('/StudentReportProfile')}}>דן דהן</span></div>
                    <div className="studentHome classStudentHome" dir="rtl">
                        <span className="verticalMiddle" onClick={()=> {history.push('/StudentReportProfile')}}>אורי זקזאק</span></div>
                </div>
            </div>

        </div>

    )
}
export default Class2