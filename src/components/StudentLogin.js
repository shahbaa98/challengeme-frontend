import { useHistory } from 'react-router-dom';

import img from './imgs/image3.png'

import './style.css'


const StudentLogin = () =>{

    const history = useHistory();
    function onSubmit() {
        history.push('/StudentProfile')
    }

    return(
        alert = () => {
            return(<h1>הודעה נשלחה למורה שלך, אל דאגה הסיסמה שלך תשלח אליך בקרוב</h1>);
        },
        <div className="app-com">
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
            <input className="placeholder" type="text" required placeholder="שם משתמש"/>
            </div>
            <br/>
            <div >
            <input className="placeholder" type="text" required placeholder="סיסמה"/>
            </div>
            <text onPress={()=>{}}>
                שכחת סיסמה?
            </text>
            <div >
            <button className="buttonStyle" >
                התחבר
            </button>
            </div>
        </div>
    )
}
export default StudentLogin


