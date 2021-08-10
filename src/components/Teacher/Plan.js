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
import img from "../imgs/image3.png";


const Plan = () => {
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
            {/*<div align="right" dir="rtl">
                <label htmlFor="fileImgStudent" className="lableImg">
                    <img width="200" height="200" src={profile}/>
                </label>
                <br/>
            </div>*/}


            <div className="edit">
                <h3 className="text">עריכה לתוכנית </h3>
                <img width='200px' height='180px' src={edit} onClick={() => { history.push('/EditPlan') }} />
                <br />
            </div>

            <div className="newchallenge">
                <h3 className="text"> הוספת תוכנית חדש</h3>
                <img width='200px' height='180px' src={newchallenge} onClick={() => { history.push('/newplan') }} />
                <br />
            </div>
        </div>
    )
}
export default Plan
