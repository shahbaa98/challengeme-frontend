import { RiLogoutBoxLine } from 'react-icons/ri';
import { useHistory } from 'react-router-dom';
import '../style.css'
import profile from '../imgs/personalPhoto.png'
import Report from '../imgs/reports.png'
import newchallenge from '../imgs/new.png'
import plan from '../imgs/plan.png'
import { useAuth } from '../../contexts/UserContext';
import {logout} from '../../actions/logout';
import React from "react";


const StudentReportProfile = () => {
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
            <h1>שהבאא</h1>
            };

            return (
            <div className="app-com">
                <div align="right" dir="rtl">
                    <label for="fileImgStudent" className="lableImg">
                        <img width="200" height="200" src={profile} />
                    </label>
                    <br />
                </div>
            </div>
            <div>  שהבאא שעלאן </div>

            <div className="Report">
                <div >דווחות</div>
                <img width='200px' height='180px' src={Report} onClick={() => { history.push('/Reports') }} />
                <br />
            </div>

            <div className="newchallenge">
                <div > הוספת אתגר חדש</div>
                <img width='200px' height='180px' src={newchallenge} onClick={() => { history.push('/AddNEWChall') }} />
                <br />
            </div>

            <div className="plan ">
                <div >  בניית תוכנית</div>
                <img width='200px' height='180px' src={plan} onClick={() => { history.push('/plan') }} />
                <br />
            </div>
        </div>
    )
}
export default StudentReportProfile