import {useHistory} from "react-router-dom";
import {RiLogoutBoxLine} from "react-icons/ri";
import img from '../imgs/image3.png'
import '../style.css'
import React, { useReducer,useState } from "react";

const Class1 = () => {
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
            <h1>כיתה י"א 1</h1>
            <div className="col-12">
                <div className="row mp0 flex-container containerStudents">
                    <div className="studentHome classStudentHome" dir="rtl">
                        <span className="verticalMiddle">זהר לוי</span></div>
                    <div className="studentHome classStudentHome" dir="rtl">
                        <span className="verticalMiddle">שירלי ריבה</span></div>
                    <div className="studentHome classStudentHome" dir="rtl">
                        <span className="verticalMiddle">ליפז דהן</span></div>
                    <div className="studentHome classStudentHome" dir="rtl">
                        <span className="verticalMiddle">נדב זקזאק</span></div>
                    <div className="studentHome classStudentHome" dir="rtl">
                        <span className="verticalMiddle">אמיר קפלן</span></div>
                    <div className="studentHome classStudentHome" dir="rtl">
                        <span className="verticalMiddle">ימית שרעבי</span></div>
                    <div className="studentHome classStudentHome" dir="rtl">
                        <span className="verticalMiddle">חגי בן שושן</span></div>
                    <div className="studentHome classStudentHome" dir="rtl">
                        <span className="verticalMiddle">גל אטל</span></div>
                    <div className="studentHome classStudentHome" dir="rtl">
                        <span className="verticalMiddle">שיר שיר</span></div>
                </div>
            </div>
          </div>
    )
}
export default Class1
