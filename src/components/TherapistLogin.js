import { useHistory } from 'react-router-dom';
import img from './imgs/image3.png'

import './style.css'
const TherapistLogin = () =>{
    const history = useHistory();

    return(
        alert = () => {
            return(<h1>הודעה נשלחה למורה שלך, אל דאגה הסיסמה שלך תשלח אליך בקרוב</h1>);
        },
            <div className="app-com">
                <div>
                    <img align="left" src={img} alt="" width="200" height="200"/>
                </div>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <h1>
                    התחבר
                </h1>
                <div >
                    <input className="placeholder" type="text" placeholder="מספר טלפון"/>
                </div>
                <br/>
                <div >
                    <input className="placeholder" type="text" placeholder="סיסמה"/>
                </div>
                <text onPress={()=>{}}>
                    שכחת סיסמה?
                </text>
                <div >
                    <button className="buttonStyle" onClick={()=> {history.push('/StudentProfile')}}>
                        התחבר
                    </button>
                </div>
                <text onPress={()=>{}}>
                    אין לך חישבון ?הרשמה
                </text>

            </div>
    )
}

export default TherapistLogin
