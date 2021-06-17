import React, { useState, useEffect } from 'react';
import {useHistory} from "react-router-dom";

const Signup1 = () => {
    //const [firstname, setFirstName] = useState('');
    //const [lastname, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password1, setPassword1] = useState('');
    const [password2, setPassword2] = useState('');
    //const [therapist, setTherapist] = useState('');
    const [errors, setErrors] = useState(false);
    const [loading, setLoading] = useState(true);
    const history = useHistory();


    useEffect(() => {
        if (localStorage.getItem('token') !== null) {
            history.push('/TeacherProfile')
        } else {
            setLoading(false);
        }
    }, []);

    const onSubmit = e => {
        e.preventDefault();

        const user = {
            //firstname: firstname,
            //lastname: lastname,
            email: email,
            //therapist:therapist,
            password1: password1,
            password2: password2
        };

        fetch('http://127.0.0.1:8000/api/v1/users/auth/register/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .catch(error => {
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
                    //setFirstName('');
                    //setLastName('');
                    setEmail('');
                    //setTherapist('');
                    setPassword1('');
                    setPassword2('');
                    localStorage.clear();
                    setErrors(true);
                }
            });
    };

    return (
        <div>
            {loading === false && <h1>Signup</h1>}
            {errors === true && <h2>Cannot signup with provided credentials</h2>}
            <form onSubmit={onSubmit}>
                {/* <label htmlFor='firstname'>firstname:</label> <br />
                <input
                    name='firstname'
                    type='text'
                    value={firstname}
                    onChange={e => setFirstName(e.target.value)}
                    required
                />{' '} */}

                <br />

                {/* <label htmlFor='lastname'>lastname:</label> <br />
                <input
                    name='lastname'
                    type='text'
                    value={lastname}
                    onChange={e => setLastName(e.target.value)}
                    required
                />{' '} */}

                <br />

                {/* <label htmlFor='therapist'>therapist:</label> <br />
                <input
                    name='therapist'
                    type='text'
                    value={therapist}
                    onChange={e => setTherapist(e.target.value)}
                    required
                />{' '} */}

                <br />

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
        </div>
    );
};

export default Signup1;
