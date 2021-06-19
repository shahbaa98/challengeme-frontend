import {useHistory} from "react-router-dom";
import {RiLogoutBoxLine} from "react-icons/ri";
import img from "../imgs/image3.png";
import React from "react";


const SearchStudent = () => {
    const history = useHistory();
    const logout = () => {
        history.push('./');
    }

    return (
        <form className="app-com">
            <div>
            <div>
                <div align ="left" onClick={()=> {history.push('/TeacherProfile')}}>
                    &lt;  אחורה
                </div>
            </div>
                <div>
                    <img align="left" src={img} alt="" width="200" height="200"/>
                </div>
                <div align="right" dir="rtl">
                    <h1>Profile picture</h1>
                </div>
            </div>
        </form>
    )
}

export default SearchStudent
