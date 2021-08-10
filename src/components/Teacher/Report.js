import { useHistory } from 'react-router-dom';
import '../style.css'
import profile from '../imgs/personalPhoto.png'
import plan from '../imgs/plan.png'
import { useAuth } from '../../contexts/UserContext';
import {logout} from '../../actions/logout';
import edit from "../imgs/edit.png"
import React from "react";
import {RiLogoutBoxLine} from "react-icons/ri";
import img from "../imgs/image3.png";
import {useFetch} from "../../useAPI";
import { authorised } from "../../request";
import axios from 'axios';
import { useState, useEffect } from "react";


const Report = () => {
    const [report, setReport] = useState('');

    useEffect(async () => {
        const data = await axios.post(`http://localhost:8000/api/students/report/`, {"student_id": 44});
        setReport(data.data);
        console.log(report)
      },
      []);
    
    const history = useHistory();

    const logout = () => {
        history.push('./');
    }
    return (
        <div className="app-com">
            <div>
                <div align="left" onClick={() => {
                    history.push('/classes')
                }}>
                    <button className="button"> אחורה </button>
                </div>
            </div>
            <div>
                <img className="profileImg"  src={img} alt="" />
            </div>
            <div className="reports-container">
            
                 
                    <div className="ClassName bottom">
                        <div className="verticalMiddle">סך כל האתגרים {report.Total_Challenges}</div>
                    </div>
                    
                    <div className="ClassName bottom">
                        <div className="verticalMiddle">מספר האתגרים שלא הושלמו {report.un_completed}</div>
                    </div>
                    <div className="ClassName bottom">
                        <div className="verticalMiddle">מספר האתגרים שהושלמו בהצלחה {report.completed}</div>
                    </div>
                    
                    <div className="ClassName bottom">
                    <div className="verticalMiddle"> 
                    כניסה אחרונה למערכת 
                    {new Date(report.last_login).toLocaleDateString('en-us')}</div>
                </div>
        
            </div>
            {/*<div align="right" dir="rtl">
                <label htmlFor="fileImgStudent" className="lableImg">
                    <img width="200" height="200" src={profile}/>
                </label>
                <br/>
            </div>*/}

        </div>
    )
}
export default Report
