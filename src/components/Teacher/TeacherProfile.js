import { RiLogoutBoxLine } from 'react-icons/ri';
import { useHistory } from 'react-router-dom';
import img from '../imgs/image3.png'
import '../style.css'
import profile from "../imgs/personalPhoto.png";
import chat from "../imgs/messages.gif";
import notification from "../imgs/notification.gif";
import addStudent from "../imgs/add_user-512.png"
import classes from "../imgs/class-icon.jpg"
import searchStudent from "../imgs/1024px-Search_Icon.svg.png"
const TeacherProfile = () => {
    const history = useHistory();
    function onSubmit() {
        history.push('/StudentProfile')
    }
    const logout = () => {
        history.push('./');
    }
    return(
        <form
            onSubmit={onSubmit}
            validate={values => {
                const errors = {};
                if (!values.username) {
                    errors.username = "Required";
                }
                if (!values.password && values.username === "test") {
                    errors.password = "Required";
                }
                return errors;
            }}>
            <div>
                <div align ="left" onClick={logout}>
                    <RiLogoutBoxLine /> התנתק
                </div>
            </div>
            <div>
                <img align="left" src={img} alt="" width="200" height="200"/>
            </div>
            <div align="right" dir="rtl">
                <h1>Profile picture</h1>
            </div>
            <div className="chat">
                <div > יש לך הודעות חדשות</div>
                <img     width= '200px' height='180px' src = {chat} onClick={()=> {history.push('/chat1')}}/>
                <br/>
            </div>
            <div className="notification1">
                <div >  התראות</div>
                <img     width= '200px' height='180px' src = {notification} onClick={()=> {history.push('/notification1')}}/>
                <br/>
            </div>
            <div className="addStudent">
                <div > הוסיף תלמיד</div>
                <img     width= '200px' height='180px' src = {addStudent} onClick={()=> {history.push('/addStudent')}}/>
                <br/>
            </div>
            <div className="classes">
                <div > כיתות שלי</div>
                <img     width= '200px' height='180px' src = {classes} onClick={()=> {history.push('/classes')}}/>
                <br/>
            </div>
            <div className="searchStudent">
                <div > הוסיף תלמיד</div>
                <img     width= '200px' height='180px' src = {searchStudent} onClick={()=> {history.push('/searchStudent')}}/>
                <br/>
            </div>
        </form>
    )
}

export default TeacherProfile 
