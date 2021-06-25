import {useHistory} from "react-router-dom";
import {RiLogoutBoxLine} from "react-icons/ri";
import img from '../imgs/image3.png'
import React, { useState, useEffect } from 'react';
import '../style.css'
import classes from "../imgs/class-icon.jpg";
import newclass from "../imgs/add.png";
import {useAuth} from "../../contexts/UserContext";
import PhoneInput from 'react-phone-input-2'
import {TextField} from "@material-ui/core";



const AddStudent = () => {
    const [Title, setTitle] = useState('');
    const [Social, setSocial] = useState('');
    const [Emotional, setEmotional] = useState('');
    const [Study, setStudy] = useState('');
    const [Personal, setPersonal] = useState('');


    const [errors, setErrors] = useState(false);
    const [loading, setLoading] = useState(true);
    const history = useHistory();
    const { userprofile } = useAuth();


    useEffect(() => {
        if (localStorage.getItem('token') !== null) {
            console.log('New Challenge has been added!');
        } else {
            setLoading(false);
        }
    }, []);

    const onSubmit = e => {
        e.preventDefault();
        // userprofile.role = 'Student';

        const student = {
            Title: Title,
            Social: Social,
            Emotional: Emotional,
            Study: Study,
            Personal: Personal,

        };

        fetch('http://127.0.0.1:8001/api/addChallanges/', {
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
                    setTitle('');
                    setSocial('');
                    setEmotional('');
                    setStudy('');
                    setPersonal('');

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
                    &lt;  אחורה
                </div>
            </div>
            {loading === false && <h1>add new challenge</h1>}
            {errors === true && <h2>Cannot signup with provided credentials</h2>}

            <form onSubmit={onSubmit}>
                <label htmlFor='Title'> Title</label> <br />
                <TextField
                    name='Title'
                    type='text'
                    value={Title}
                    onChange={e => setTitle(e.target.value)}
                    required
                />{' '}
                <br />
                <label htmlFor='Social'>Social</label> <br />
                <input
                    name='Social'
                    type='number'
                    value={Social}
                    onChange={e => setSocial(e.target.value)}
                    required
                />{' '}
                <br />
                <label htmlFor='Emotional'> Emotional</label> <br />
                <input
                    name='Emotional'
                    type='number'
                    value={Emotional}
                    onChange={e => setEmotional(e.target.value)}
                    required
                />{' '}
                <br />
                <label htmlFor='Study'>Study</label> <br />
                <input
                    name='Study'
                    type='number'
                    value={Study}
                    onChange={e => setStudy(e.target.value)}
                    required
                />{' '}
                <br />
                <label htmlFor='Personal'> Personal</label> <br />
                <input
                    name='Personal'
                    type='number'
                    value={Personal}
                    onChange={e => setPersonal(e.target.value)}
                    required
                />{' '}
                <br />




                <br />
                <input type='submit' value='add' />
            </form>

        </div>
    );
};

export default AddStudent;
