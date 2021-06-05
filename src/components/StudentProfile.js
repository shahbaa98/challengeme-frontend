import { RiLogoutBoxLine } from 'react-icons/ri';
import { useHistory } from 'react-router-dom';
import EmptyImgStudentBase64 from './ImgStudent';
import {ChatBox} from 'react-chatbox-component';
import chatImg from './imgs/chat.jpg'
import './style.css'
import profile from './imgs/personalPhoto.png'
import chat from './imgs/messages.gif'
import challenge from './imgs/challenge.gif'
import notification from './imgs/notification.gif'
const StudentProfile = () => {
    const history = useHistory();
    const dataImg = EmptyImgStudentBase64,


    logout = () => {
      history.push('/');
    }
    return(
        <div className="app-com">

        <div>
            <div align ="left" onClick={logout}>
                <RiLogoutBoxLine /> התנתק
            </div>
        </div>

        <div align ="right" dir="rtl">
          <label for="fileImgStudent" className="lableImg">
              <img width="200" height="200"  src={profile} />
          </label>
          <br/>
          <input type="file" id="fileImgStudent"  align="right"/>
          </div>
          <div>  הי שהבאא שעלאן </div>

    <div className="chat">
        <div > יש לך הודעות חדשות</div>
        <img     width= '200px' height='180px' src = {chat} /> 
        <br/>
    </div>

    <div className="challenge">
        <div >  האתגרים שלי</div>
        <img     width= '200px' height='180px' src = {challenge} /> 
        <br/>
    </div>

    <div className="notification">
        <div >  התראות</div>
        <img     width= '200px' height='180px' src = {notification} /> 
        <br/>
    </div>
    
    </div>
    )

}
export default StudentProfile 