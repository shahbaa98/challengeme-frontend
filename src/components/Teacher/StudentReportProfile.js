import { useHistory, useParams } from 'react-router-dom';
import '../style.css'
import profile from '../imgs/personalPhoto.png'
import Report from '../imgs/reports.png'
import newchallenge from '../imgs/new.png'
import plan from '../imgs/plan.png'
import React from "react";
import {RiLogoutBoxLine} from "react-icons/ri";
import img from "../imgs/image3.png";
import {useAuth} from "../../contexts/UserContext";
import {useFetch} from "../../useAPI";


const StudentReportProfile = () => {

    const history = useHistory();
    const params = useParams();
    const { data } = useFetch(`teacher/classes/${params.class_id}/`, []);



    return (
       <form>
        <div className="app-com">
            <div>
                <div align="left" onClick={() => { history.push('/classes') }}>
                    <button className="button"> אחורה </button>
                </div>
            </div>
            <div>
                <img className="profileImg"  src={img} alt="" />
            </div>
            {/*<div align="right" dir="rtl">
                <label for="fileImgStudent" className="lableImg">
                    <img width="200" height="200" src={profile} />
                </label>
                <br />
            </div>*/}


            <div className="Report">
                <h3 className="text" >דווחות</h3>
                <img width='200px' height='180px' src={Report} onClick={() => { history.push('/Report') }} />
                <br />
            </div>

            <div className="newchallenge">
                <h3 className="text" > הוספת אתגר חדש</h3>
                <img width='200px' height='180px' src={newchallenge} onClick={() => history.push({pathName: `/students/${params.student_id}/add-challenge`, state: params.class_id} )} />
                <br />
            </div>

            <div className="plan ">
                <h3  className="text">  בניית תוכנית</h3>
                <img width='200px' height='180px' src={plan} onClick={() => { history.push('/Plan') }} />
                <br />
            </div>
        </div>
       </form>
    )
}
export default StudentReportProfile
