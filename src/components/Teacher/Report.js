import { RiLogoutBoxLine } from 'react-icons/ri';
import { useHistory } from 'react-router-dom';
import '../style.css'
import profile from '../imgs/personalPhoto.png'
import Report from '../imgs/reports.png'
import newchallenge from '../imgs/new.png'
import plan from '../imgs/plan.png'
import { useAuth } from '../../contexts/UserContext';
import {logout} from '../../actions/logout';
import edit from "../imgs/edit.png"
import React from "react";


const Report = () => {
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

            <div className="edit">
                <div >עריכה לתוכנית </div>
                <img width='200px' height='180px' src={edit} onClick={() => { history.push('/EditPlan') }} />
                <br />
            </div>

            <div className="newchallenge">
                <div > הוספת אתגר חדש</div>
                <img width='200px' height='180px' src={newchallenge} onClick={() => { history.push('/AddNEWChall') }} />
                <br />
            </div>
        </div>
    )
}
export default Report