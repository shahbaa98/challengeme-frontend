import { useHistory } from 'react-router-dom';
import '../style.css'
import profile from '../imgs/personalPhoto.png'
import plan from '../imgs/plan.png'
import { useAuth } from '../../contexts/UserContext';
import {logout} from '../../actions/logout';
import edit from "../imgs/edit.png"
import React from "react";
import {RiLogoutBoxLine} from "react-icons/ri";


const Report = () => {
    const history = useHistory();
    const logout = () => {
        history.push('./');
    }
    return (
        <div className="app-com">
            <div>
                <div align="left" onClick={() => {
                    history.push('/StudentReportProfile')
                }}>
                    <button className="button"> אחורה </button>
                </div>
            </div>
            <div align="right" dir="rtl">
                <label htmlFor="fileImgStudent" className="lableImg">
                    <img width="200" height="200" src={profile}/>
                </label>
                <br/>
            </div>

        </div>
    )
}
export default Report
