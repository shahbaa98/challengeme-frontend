import {useHistory} from "react-router-dom";
import {RiLogoutBoxLine} from "react-icons/ri";
import img from '../imgs/image3.png'
import '../style.css'
import React, { useReducer,useState } from "react";
import classes from "../imgs/class-icon.jpg";
import newclass from "../imgs/add.png"


const formReducer = (state, event) => {
    if(event.reset) {
        return {
            firstname: '',
            lastname: '',
            username: '',
            password: '',
            therapist: '',
        }
    }
    return {
        ...state,
        [event.name]: event.value
    }
}
const AddStudent = () => {
    const history = useHistory();
    const logout = () => {
        history.push('./');
    }
    const [formData, setFormData] = useReducer(formReducer, {});
    const [submitting, setSubmitting] = useState(false);
    const handleSubmit = event => {
        event.preventDefault();
        setSubmitting(true);

        setTimeout(() => {
            setSubmitting(false);
            setFormData({
                reset: true
            })
        }, 3000)
    }
    //pulls the data from event.target
    const handleChange = event => {
        setFormData({
            name: event.target.name,
            value: event.target.value,
        });
    }
    return (
        <div className="app-com">
            <div>
                <div align ="left" onClick={()=> {history.push('/TeacherProfile')}}>
                     &lt;  אחורה
                </div>
            </div>
            <h1>הוספת תלמיד חדש</h1>
            {submitting &&
            <div>
                You are submitting the following:
                <ul>
                    {Object.entries(formData).map(([name, value]) => (
                        <li key={name}><strong>{name}</strong>:{value.toString()}</li>
                    ))}
                </ul>
            </div>
            }
            <br/><br/>
            <form onSubmit={handleSubmit} dir="rtl"  >
                <fieldset disabled={submitting}>
                    <label className="label">
                        <p>שם אישי:</p>
                        <input className="box" type="text" name="firstname" onChange={handleChange}  value={formData.firstname || ''}/>
                    </label>
                        <br/>
                    <label className="label">
                        <p>שם משפחה:</p>
                    <input className="box" type="text" name="lastname" onChange={handleChange} value={formData.lastname || ''}/>
                    </label>
                    <br/>
                    <label className="label">
                        <p>שם משתמש:</p>
                    <input className="box" type="text" name="username" onChange={handleChange}  value={formData.username || ''}/>
                    </label>
                    <br/>
                    <label className="label">
                        <p>סיסמה:</p>
                    <input className="box" type="password" name="password" onChange={handleChange}  value={formData.password || ''}/>
                    </label>
                    <br/>
                    <label className="label">
                        <p>מטפל:</p>
                    <input className="box"type="text" name="therapist" onChange={handleChange}  value={formData.therapist || ''}/>
                    </label>
                </fieldset>
                <br/>
                <button type="submit" disabled={submitting}>שלח</button>
            </form>
            <div className="Myclasses">
                <div >שייך לכיתה</div>
                <img     width= '200px' height='180px' src = {classes} onClick={()=> {history.push('/classes')}}/>
                <br/>
            </div>
            <div className="Newclass">
                <div >שייך לכיתה חדשה</div>
                <img     width= '200px' height='180px' src = {newclass} onClick={()=> {history.push('/newclass')}}/>
                <br/>
            </div>
        </div>
    )
}
export default AddStudent
