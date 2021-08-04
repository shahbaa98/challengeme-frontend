import { useHistory, useParams } from "react-router-dom";
import '../style.css'
import React from "react";
import { useFetch } from "../../useAPI";

import {RiLogoutBoxLine} from "react-icons/ri";
import {useAuth} from "../../contexts/UserContext";

const StudentClass = () => {
    const params = useParams();
    const { data } = useFetch(`teacher/classes/${params.class_id}/`, []);
    const history = useHistory();

    return (
        <div className="app-com">
            <div>
                <div align="left" onClick={() => { history.push('/Classes') }}>
                    <button className="button"> אחורה </button>
                </div>
            </div>
            <h1 className="text"> תלמידי הכיתה</h1>
            <br/>
            <div className="col-12">
                <div className="row mp0 flex-container containerStudents">
                    {data.map((student) => {
                        return (
                            <div className="studentHome classStudentHome" dir="rtl" >
                                <div className="verticalMiddle" onClick={() => { history.push(`/students/${student.id}`) }}>{student.first_name} {student.last_name}</div>
                            </div>

                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default StudentClass
