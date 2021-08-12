import { RiLogoutBoxLine } from 'react-icons/ri';
import { useHistory } from 'react-router-dom';
import '../style.css'
import profile from '../imgs/personalPhoto.png'
import challenge from '../imgs/challenge.gif'
import messages from '../imgs/messages.gif'

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


      <div className="challenges">
        <div >  האתגרים שלי</div>
        <img width='200px' height='180px' src={challenge} onClick={() => { history.push('/challenges') }} />
        <br />
      </div>

      <div className="chatStudent">
        <div >  ההודעות שלי</div>
        <img width='200px' height='180px' src={messages} onClick={() => {window.open('http://localhost:8000/chat/') }} />
        <br />
      </div>

      <div className="StudentNotifications">
        <div >  ההתראות שלי</div>
        <img width='200px' height='180px' src={notification} onClick={() => { history.push('/StudentNotifications') }} />
        <br />
      </div>


    </div>
  )

}
export default StudentProfile
