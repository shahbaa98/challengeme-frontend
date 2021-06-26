import { useHistory, useParams } from "react-router-dom";
import '../style.css'
import React from "react";
import { useFetch } from "../../useAPI";
import {RiLogoutBoxLine} from "react-icons/ri";

const StudentClass = () => {
    const params = useParams();
    const { data } = useFetch(`teacher/classes/${params.class_id}/`, []);
    const history = useHistory();

    return (
        <div className="app-com">
            <div>
                <div align="left" onClick={() => { history.push('/Classes') }}>
                    <button className="button"> <RiLogoutBoxLine /> התנתק </button>
                </div>
            </div>
            <h1>כיתה י"א 1</h1>
            <div className="col-12">
                <div className="row mp0 flex-container containerStudents">
                    {data.map((student) => {
                        return (
                            <div className="studentHome classStudentHome" dir="rtl" >
                                <span className="verticalMiddle" onClick={() => { history.push(`/students/${student.id}/profile`) }}>{student.first_name} {student.last_name}</span>
                            </div>

                        )
                    })}
                </div>
            </div>
        </div>
    )
}
export default StudentClass
