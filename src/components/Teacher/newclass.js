import {useHistory} from "react-router-dom";
import '../style.css'
import React, { useReducer,useState } from "react";


const formReducer = (state, event) => {
    if(event.reset) {
        return {
            classID: '',
            className: '',
            teachername: '',
        }
    }
    return {
        ...state,
        [event.name]: event.value
    }
}
const newclass = () => {
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
            <h1>הוספת כיתה חדשה </h1>
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
                        <p>מספר כיתה:</p>
                        <input className="box" type="number" name="classID" onChange={handleChange}  value={formData.classID || ''}/>
                    </label>
                    <br/>
                    <label className="label">
                        <p>שם כיתה:</p>
                        <input className="box" type="text" name="className" onChange={handleChange} value={formData.className || ''}/>
                    </label>
                    <br/>
                    <label className="label">
                        <p>שם מורה אחראי:</p>
                        <input className="box" type="text" name="teachername" onChange={handleChange}  value={formData.teachername || ''}/>
                    </label>
                    <br/>
                </fieldset>
                <br/>
                <button type="submit" disabled={submitting}>הוספה</button>
            </form>
        </div>
    )
}
export default newclass
