import {useHistory} from "react-router-dom";
import '../style.css'
import React, {useEffect, useReducer, useState} from "react";
import img from "../imgs/image3.png";
import classes from "../imgs/class-icon.jpg";
import newclass from "../imgs/add.png";



const Newclass = () => {
    const [classID, setClassID] = useState('');
    const [className, setClassName] = useState('');
    const [teachername, setTeacherName] = useState('');
    const [errors, setErrors] = useState(false);
    const [loading, setLoading] = useState(true);
    const history = useHistory();

    useEffect(() => {
        if (localStorage.getItem('token') !== null) {
            history.push('/Classes')
        } else {
            setLoading(false);
        }
    }, []);

    const onSubmit = e => {
        e.preventDefault();

        const user = {
            classID: classID,
            className: className,
            teachername: teachername,

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
                if (error.code === 'auth/class-already-in-use') {
                    console.log('That class address is already in use!');
                }
            })
            .then(data => {
                if (data.key) {
                    localStorage.clear();
                    localStorage.setItem('token', data.key);
                    history.push('/Classes')
                } else {
                    setClassID('');
                    setClassName('');
                    setTeacherName('');
                    localStorage.clear();
                    setErrors(true);
                }
            });
    };
    return (
        <div className="app-com">
            <div>
                <div align ="left" onClick={()=> {history.push('/Classes')}}>
                    &lt;  אחורה
                </div>
            </div>
            {loading === false && <h1>Add New Class</h1>}
            {errors === true && <h2>Cannot add class that is already in use</h2>}
            <form onSubmit={onSubmit}>
                <label htmlFor='classID'>classID:</label> <br />
                <input
                    name='classID'
                    type='number'
                    value={classID}
                    onChange={e => setClassID(e.target.value)}
                    required
                />{' '}

                <br />

                <label htmlFor='className'>className:</label> <br />
                <input
                    name='className'
                    type='text'
                    value={className}
                    onChange={e => setClassName(e.target.value)}
                    required
                />{' '}

                <br />

                <label htmlFor='teachername'>teachername:</label> <br />
                <input
                    name='teachername'
                    type='text'
                    value={teachername}
                    onChange={e => setTeacherName(e.target.value)}
                    required
                />{' '}

                <br />
                <br />

                <input type='submit' value='Add' />
            </form>
        </div>
    );
};
export default Newclass
