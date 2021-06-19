import { RiLogoutBoxLine } from 'react-icons/ri';
import { useHistory } from 'react-router-dom';
import '../style.css'
import profile from '../imgs/personalPhoto.png'
import chat from '../imgs/messages.gif'
import challenge from '../imgs/challenge.gif'
import notification from '../imgs/notification.gif'
import { useAuth } from '../../contexts/UserContext';
import {logout} from '../../actions/logout';


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
      {userprofile ? userprofile.role : "Not authenticated"}
      <div>
        <div align="left" onClick={handleLogout}>
          <RiLogoutBoxLine /> התנתק

            </div>
      </div>

      <div align="right" dir="rtl">
        <label for="fileImgStudent" className="lableImg">
          <img width="200" height="200" src={profile} />
        </label>
        <br />
        <input type="file" id="fileImgStudent" align="right" />
      </div>
      <div>  הי שהבאא שעלאן </div>

      <div className="chat">
        <div > יש לך הודעות חדשות</div>
        <img width='200px' height='180px' src={chat} onClick={() => { history.push('/chat') }} />
        <br />
      </div>

      <div className="challenge">
        <div >  האתגרים שלי</div>
        <img width='200px' height='180px' src={challenge} onClick={() => { history.push('/challenges') }} />
        <br />
      </div>

      <div className="notification">
        <div >  התראות</div>
        <img width='200px' height='180px' src={notification} onClick={() => { history.push('/notification') }} />
        <br />
      </div>

    </div>
  )

}
export default StudentProfile