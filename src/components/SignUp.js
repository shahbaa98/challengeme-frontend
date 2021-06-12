import { useHistory } from 'react-router-dom';

import img from './imgs/image3.png'

import './style.css'

export function SignupForm(props) {
    const history = useHistory();

    function onSubmit() {
        history.push('/TeacherProfile')
    }

    return (
        <div className="app-com">
            <div>
                <img align="left" src={img} alt="" width="200" height="200"/>
            </div>
            <br/>
            <h1>הרשמה</h1>
            <div>
                <input className="placeholder" type="text" required placeholder="שם פרטי"/>
            </div>
            <br/>
            <div>
                <input className="placeholder" type="text" required placeholder="שם משפחה"/>
            </div>
            <br/>
            <div>
                <input className="placeholder" type="number" required placeholder="מספר טלפון"/>
            </div>
            <br/>
            <div>
                <input className="placeholder" type="email" required placeholder="אמייל"/>
            </div>
            <br/>
            <div>
                <input className="placeholder" type="text" required placeholder="בית הספר"/>
            </div>
            <br/>
            <div>
                <input className="placeholder" type="text" required placeholder="שם משתמש"/>
            </div>
            <br/>
            <div>
                <input className="placeholder" type="text" required placeholder="סיסמה"/>
            </div>
            <div>
                <input className="placeholder" type="text" required placeholder=" אימות סיסמה"/>
            </div>
            <br/>
            <div>
                <button className="buttonStyle">הירשם</button>
            </div>
        </div>
    )
}
export default SignupForm

