import {useHistory} from "react-router-dom";
import {RiLogoutBoxLine} from "react-icons/ri";
import img from "../imgs/image3.png";
import React from "react";
import profile from '../imgs/personalPhoto.png'


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
                    <label htmlFor="fileImgStudent" className="lableImg">
                        <img width="200" height="200" src={profile}/>
                    </label>
                </div>
            </div>
        </form>
    )
}

export default SearchStudent
