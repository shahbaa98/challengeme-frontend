import { RiLogoutBoxLine } from 'react-icons/ri';
import { useHistory } from 'react-router-dom';
import EmptyImgStudentBase64 from './ImgStudent';
import {ChatBox} from 'react-chatbox-component';
import chatImg from './chat.jpg'
import './StudentProfile.css'

const StudentProfile = () => {
    const history = useHistory();
    const dataImg = EmptyImgStudentBase64,


    logout = () => {
      history.push('/');
    }
    return(
        <div className="studentProfile">

        <div className="studentPage">
                <div className="d-flex justify-content-start" style={{ padding: '2% 0 0 2%', color: 'rgb(46, 46, 124)' }}
                    onClick={logout}>
                    <RiLogoutBoxLine color='rgb(46, 46, 124)' size={25} style={{ marginRight: '2%' }} /> התנתק
                </div>
        </div>

        <div className="headLineHomePage row" dir="rtl">
          <input type="file" id="fileImgStudent"  />
          <label for="fileImgStudent" className="lableImg">
              <img className="emptyUserImg" style={{ margin: '1px' }} src={`data:image/jpeg;base64,${dataImg}`} />
          </label>
          <div className="row helloName">  הי שהבאא שעלאן </div>
    </div>
    <div >
        <div> יש לך הודעות חדשות</div>
        <img src = {chatImg} width={300} height={300} mode='fit' align ='center'/> 
        <div ><button >לקריאה לחץ כאן</button></div>
    </div>
    
    </div>
    )

}
export default StudentProfile 