import {useHistory} from "react-router-dom";
import {RiLogoutBoxLine} from "react-icons/ri";
import img from '../imgs/image3.png'
import React, { useState, useEffect } from 'react';
import '../style.css'
import classes from "../imgs/class-icon.jpg";
import newclass from "../imgs/add.png";
import {useAuth} from "../../contexts/UserContext";
import PhoneInput from 'react-phone-input-2'
import {ListItem, Select} from "@material-ui/core";
import {useFetch} from "../../useAPI";
import {Dropdown} from "reactstrap";




const AddStudent = (props) => {
    const [firstname, setFirstName] = useState('');
    const [lastname, setLastName] = useState('');
    const [username, setUserName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [teacher, setTeacher] = useState('');
    const [classname, setClassName] = useState('');
    const [birthdate, setBirthDate] = useState('');
    const [password1, setPassword1] = useState('');
    const [password2, setPassword2] = useState('');
    //const [therapist, setTherapist] = useState('');
    const [errors, setErrors] = useState(false);
    const [loading, setLoading] = useState(true);
    const history = useHistory();
    const { userprofile } = useAuth();
    const { data } = useFetch("teacher/classes/", []);


    const options = data.map((Class) => {
        return (
            <option>
                {Class.title}
            </option>
        )
    })


    useEffect(() => {
        if (localStorage.getItem('token') !== null) {
            console.log('New Student has been added!');
        } else {
            setLoading(false);
        }
    }, []);

    const onSubmit = e => {
        e.preventDefault();
       // userprofile.role = 'Student';

        const student = {
            firstname: firstname,
            lastname: lastname,
            username: username,
            email: email,
            phone: phone,
            teacher: teacher,
            classname: data.find(Class => Class.name == classname),
            birthdate: birthdate,
            //therapist:therapist,
            password1: password1,
            password2: password2,
            role: ["Student"],

        };

        fetch('https://backend-auth-forked-3u9bv.ondigitalocean.app/api/v1/users/dj-rest-auth/registration/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(student)
        })
            .then(res => res.json())
            .catch(error => {
                //auth/email-already-in-use returns if user exists(backend)
                if (error.code === 'auth/email-already-in-use') {
                    console.log('That email address is already in use!');
                }
            })
            .then(data => {
                if (data.key) {
                    localStorage.clear();
                    localStorage.setItem('token', data.key);
                    history.push('/TeacherProfile')
                } else {
                    setFirstName('');
                    setLastName('');
                    setUserName('');
                    setEmail('');
                    setPhone('');
                    setTeacher('');
                    setClassName('');
                    setBirthDate('');
                    //setTherapist('');
                    setPassword1('');
                    setPassword2('');
                    localStorage.clear();
                    setErrors(true);
                }
            });
            console.log(student)
    };

    return (
        <div className="app-com">
              <div>
                <div align ="left" onClick={()=> {history.push('/TeacherProfile')}}>
                    <button className="button"> אחורה </button>
                </div>
            </div>
            {loading === false && <h1 className="text1">הוספת תלמיד חדש</h1>}
            {/* {errors === true && <h2>Cannot signup with provided credentials</h2>} */}
            <br/>
            <br/>
            
            <form onSubmit={onSubmit}>
                <label htmlFor='firstname' >שם פרטי</label> <br />
                <input className="input"
                    name='firstname'
                    type='text'
                    value={firstname}
                    onChange={e => setFirstName(e.target.value)}
                    required
                />{' '}

                <br />

                <label htmlFor='lastname' >שם משפחה</label> <br />
                <input className="input"
                    name='lastname'
                    type='text'
                    value={lastname}
                    onChange={e => setLastName(e.target.value)}
                    required
                />{' '}

                <br />

                <label htmlFor='username' >שם משתמש</label> <br />
                <input className="input"
                    name='username'
                    type='text'
                    value={username}
                    onChange={e => setUserName(e.target.value)}
                    required
                />{' '}

                <br />

                <label htmlFor='phone' >מספר טלפון</label> <br />
                <input className="input"
                  placeholder="Enter phone number"

                  value={phone}
                  onChange={e => setPhone(e.target.value)}
                />{' '}
                <br/>
                {/* <label htmlFor='teacher'>שם המורה</label> <br />
                <input
                    name='teacher'
                    type='text'
                    value={teacher}
                    onChange={e => setTeacher(e.target.value)}
                    required
                />{' '}
                <br />
                */}

                <label htmlFor='classname'>שם הכיתה</label> <br />
                    <select placeholder='בחר כיתה' className="input" 
                    onChange={e => setClassName(e.target.value)}>
                    {options}
                    </select>
                <br />

                <label htmlFor='birthdate' >תאריך לידה</label> <br />
                <input className="input"
                    name='birthdate'
                    type='date'
                    value={birthdate}
                    onChange={e => setBirthDate(e.target.value)}
                    required
                />{' '}

                <br />
                {/* <label htmlFor='therapist'>therapist:</label> <br />
                <input
                    name='therapist'
                    type='text'
                    value={therapist}
                    onChange={e => setTherapist(e.target.value)}
                    required
                />{' '} */}

                <label htmlFor='username' >אמייל</label> <br />
                <input className="input"
                    name='email'
                    type='email'
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    required
                />{' '}

                <br />

                <label htmlFor='password1' >סיסמה</label> <br />
                <input className="input"
                    name='password1'
                    type='password'
                    value={password1}
                    onChange={e => setPassword1(e.target.value)}
                    required
                />{' '}
                <br />
                <label htmlFor='password2'>אימות סיסמה</label> <br />
                <input className="input"
                    name='password2'
                    type='password'
                    value={password2}
                    onChange={e => setPassword2(e.target.value)}
                    required
                />{' '}
                <br/>
                <input  className="input" type='submit' value='הרשמה' />
            </form>

        </div>
    );
};

export default AddStudent;
