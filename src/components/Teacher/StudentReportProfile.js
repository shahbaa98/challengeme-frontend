import { useHistory, useParams } from 'react-router-dom';
import '../style.css'
import profile from '../imgs/personalPhoto.png'
import Report from '../imgs/reports.png'
import newchallenge from '../imgs/new.png'
import challenge from '../imgs/challenge.jpg'
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
  console.log(data)
  console.log(params)


    return (
       
        <div className="app-com">
            <div>
                <div align="left" onClick={() => { window.history.back() }}>
                    <button className="button"> אחורה </button>
                </div>
            </div>
            <div>
                <img className="profileImg"  src={img} alt="" />
            </div>
       

            <div className="Report">
                <h3 className="text" >דווחות</h3>
                <img width='200px' height='180px' src={Report} onClick={() => { history.push('/Report') }} />
                <br />
            </div>

            <div className="newchallenge">
                <h3 className="text" >הוספת אתגר</h3>
                <img width='200px' height='180px' src={challenge} onClick={() => history.push("/challenge")} />
                <br />
            </div>

            <div className="plan ">
                <h3  className="text">  בניית תוכנית</h3>
                <img width='200px' height='180px' src={plan} onClick={() => { history.push('/Plan') }} />
                <br />
            </div>
        </div>
       
    )
}
export default StudentReportProfile
