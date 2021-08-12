import axios from 'axios';
import { useState, useEffect } from "react";
import { useHistory } from 'react-router-dom';
import { useAuth } from '../../contexts/UserContext';



const  StudentNotifications = () => {
    const { userprofile } = useAuth();

    const [notification, setnotification] = useState([]);

    useEffect(async () => {
        const data = await axios.post(`http://localhost:8000/api/student_notif/`, {"student_id": userprofile.id});
        setnotification(data.data);
      },
      []);
    const history = useHistory();

    return (
        <div className="app-com">
            <div>
                <div align="left" onClick={() => { history.push('/StudentProfile') }}>
                    <button className="button"> אחורה </button>
                </div>
            </div>
            <h1>
            Student Notifications room
            </h1>
            {notification.map((challanges) => {
                return (
                    <div className="ClassName"  style={{ marginTop: 20, marginBottom: 20 }}>
                        <div className="verticalMiddle">נוסף לך אתגר חדש בשם :  {challanges.Title}</div>
                    </div>
                )
            })}
        </div>)
}
export default StudentNotifications