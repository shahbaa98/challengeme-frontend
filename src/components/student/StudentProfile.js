import { RiLogoutBoxLine } from 'react-icons/ri';
import { useHistory } from 'react-router-dom';
import '../style.css'
import profile from '../imgs/personalPhoto.png'
import chat from '../imgs/messages.gif'
import challenge from '../imgs/challenge.gif'
import notification from '../imgs/notification.gif'
import { useAuth } from '../../contexts/UserContext';
import {logout} from '../../actions/logout';
import React from "react";
import img from "../imgs/image3.png";


const StudentProfile = () => {
  const { deauthenticate, userprofile } = useAuth();
  const history = useHistory();


  const handleLogout = e => {
    e.preventDefault();
    const response = logout();
    deauthenticate(response.data);
    localStorage.clear();
    history.push('/');
    };

  return (
    <div className="app-com">
        <div className="text">
        {userprofile ? userprofile.role : "Not authenticated"}
        {console.log(userprofile)}
        </div>
      <div>
        <div align="left" onClick={handleLogout}>
            <button className="button"> <RiLogoutBoxLine /> התנתק </button>

            </div>
          <div>
              <h1 className="text">{userprofile.first_name} {userprofile.last_name} שלום </h1>

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
        <input type="file" id="fileImgStudent" align="right" />

      </div>*/}


      <div className="challenge">
        <div >  האתגרים שלי</div>
        <img width='200px' height='180px' src={challenge} onClick={() => { history.push('/challenges') }} />
        <br />
      </div>


    </div>
  )

}
export default StudentProfile
