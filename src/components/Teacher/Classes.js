import { useHistory } from "react-router-dom";
import '../style.css'
import React, { useReducer, useState } from "react";
import { useFetch } from "../../useAPI";




const Classes = () => {
    const history = useHistory();
    const logout = () => {
        history.push('./');
    }
    const { data } = useFetch("teacher/classes/", []);

    return (
        <div className="app-com">
            <div>
                <div align="left" onClick={() => { history.push('/TeacherProfile') }}>
                    <button className="button"> אחורה </button>
                </div>
            </div>
            <h1 className="text">הכיתות שלי</h1>

            <br />
            {data.map((studentClass) => {
                return (
                    <div className="ClassName" style={{ marginBottom: 20 }}>
                        <div><span className="verticalMiddle" onClick={() => { history.push(`/classes/${studentClass.id}`) }}>{studentClass.title}</span></div>
                    </div>
                )
            })}


        </div>
    )
}
export default Classes
