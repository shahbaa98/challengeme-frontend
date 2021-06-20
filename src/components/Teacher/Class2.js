import {useHistory} from "react-router-dom";
import {RiLogoutBoxLine} from "react-icons/ri";
import img from '../imgs/image3.png'
import '../style.css'
import React, { useReducer,useState } from "react";

const Class2 = () => {
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
            <h1>כיתה י"א 2</h1>

        </div>

    )
}
export default Class2