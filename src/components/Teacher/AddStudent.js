import {useHistory} from "react-router-dom";
import {RiLogoutBoxLine} from "react-icons/ri";
import img from '../imgs/image3.png'
import React, { useState, useEffect } from 'react';
import '../style.css'
import classes from "../imgs/class-icon.jpg";
import newclass from "../imgs/add.png";
import {useAuth} from "../../contexts/UserContext";


const AddStudent = () => {
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
            classname: classname,
            birthdate: birthdate,
            //therapist:therapist,
            password1: password1,
            password2: password2,
            role: ["Student"],

        };

        fetch('http://127.0.0.1:8000/api/v1/users/auth/register/', {
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
    };

    return (
        <div className="app-com">
            {loading === false && <h1>Add New Student</h1>}
            {errors === true && <h2>Cannot signup with provided credentials</h2>}
            <form onSubmit={onSubmit}>
                <label htmlFor='firstname'>Firstname:</label> <br />
                <input
                    name='firstname'
                    type='text'
                    value={firstname}
                    onChange={e => setFirstName(e.target.value)}
                    required
                />{' '}

                <br />

                <label htmlFor='lastname'>Lastname:</label> <br />
                <input
                    name='lastname'
                    type='text'
                    value={lastname}
                    onChange={e => setLastName(e.target.value)}
                    required
                />{' '}

                <br />

                <label htmlFor='username'>Username:</label> <br />
                <input
                    name='username'
                    type='text'
                    value={username}
                    onChange={e => setUserName(e.target.value)}
                    required
                />{' '}

                <br />

                <label htmlFor='phone'>Phone Number:</label> <br />
                <input
                    name='phone'
                    type='number'
                    value={phone}
                    onChange={e => setPhone(e.target.value)}
                    required
                />{' '}

                <br />

                <label htmlFor='teacher'>Teacher Name:</label> <br />
                <input
                    name='teacher'
                    type='text'
                    value={teacher}
                    onChange={e => setTeacher(e.target.value)}
                    required
                />{' '}

                <br />

                <label htmlFor='classname'>Class Name:</label> <br />
                <input
                    name='classname'
                    type='text'
                    value={classname}
                    onChange={e => setClassName(e.target.value)}
                    required
                />{' '}

                <br />

                <label htmlFor='birthdate'>Birth Date:</label> <br />
                <input
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

                <label htmlFor='username'>email:</label> <br />
                <input
                    name='email'
                    type='email'
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    required
                />{' '}

                <br />

                <label htmlFor='password1'>Password:</label> <br />
                <input
                    name='password1'
                    type='password'
                    value={password1}
                    onChange={e => setPassword1(e.target.value)}
                    required
                />{' '}
                <br />
                <label htmlFor='password2'>Confirm password:</label> <br />
                <input
                    name='password2'
                    type='password'
                    value={password2}
                    onChange={e => setPassword2(e.target.value)}
                    required
                />{' '}
                <br />
                <input type='submit' value='Signup' />
            </form>

            <div className="Myclasses">
                <div >שייך לכיתה</div>
                <img     width= '200px' height='180px' src = {classes} onClick={()=> {history.push('/classes')}}/>
                <br/>
            </div>
            <div className="Newclass">
                <div >שייך לכיתה חדשה</div>
                <img     width= '200px' height='180px' src = {newclass} onClick={()=> {history.push('/classes')}}/>
                <br/>
            </div>
        </div>
    );
};

export default AddStudent;
