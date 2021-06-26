import { useHistory, useParams } from 'react-router-dom';
import '../style.css'
import profile from '../imgs/personalPhoto.png'
import Report from '../imgs/reports.png'
import newchallenge from '../imgs/new.png'
import plan from '../imgs/plan.png'
import React from "react";


const StudentReportProfile = () => {
    const history = useHistory();
    const params = useParams();

    return (
        <div className="app-com">
            <div>
                <div align="left" onClick={() => { history.push('/Classes') }}>
                    &lt;  אחורה
                </div>
            </div>
            <div align="right" dir="rtl">
                <label for="fileImgStudent" className="lableImg">
                    <img width="200" height="200" src={profile} />
                </label>
                <br />
            </div>

            <div className="Report">
                <div >דווחות</div>
                <img width='200px' height='180px' src={Report} onClick={() => { history.push('/Report') }} />
                <br />
            </div>

            <div className="newchallenge">
                <div > הוספת אתגר חדש</div>
                <img width='200px' height='180px' src={newchallenge} onClick={() => { history.push(`/students/${params.student_id}/add-challenge`) }} />
                <br />
            </div>

            <div className="plan ">
                <div >  בניית תוכנית</div>
                <img width='200px' height='180px' src={plan} onClick={() => { history.push('/Plan') }} />
                <br />
            </div>
        </div>
    )
}
export default StudentReportProfile
