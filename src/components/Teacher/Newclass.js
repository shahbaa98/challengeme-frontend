import { useHistory, useParams } from "react-router-dom";
import React, { useState, useEffect } from 'react';
import '../style.css'
import { useAuth } from "../../contexts/UserContext";
import { TextField } from "@material-ui/core";
import { addNewChallenge } from "../../actions/addNewChallenge";
import {RiLogoutBoxLine} from "react-icons/ri";



const Newclass = () => {
    const params = useParams();
    const [classID, setClassID] = useState('');
    const [className, setClassName] = useState('');
   // const [teachername, setTeacherName] = useState('');
  //  const [completed, setCompleted] = useState(false);
    const [errors, setErrors] = useState(false);
    const [loading, setLoading] = useState(true);
    const history = useHistory();
    const { userprofile } = useAuth();


    useEffect(() => {
        if (localStorage.getItem('token') !== null) {
            console.log('New Class has been added!');
        } else {
            setLoading(false);
        }
    }, []);

    const onSubmit = async e => {
        e.preventDefault();

        const teacher = {
            classID: classID,
            className: className,
            //completed: completed,
            teacher: [params.teacher_id]

        };

        try {
            const data = await addNewChallenge(teacher);

            setClassID('');
            setClassName('');
            //setCompleted('false');

            setErrors(false);


        } catch (error) {
            console.log(error)
        }

    };

    return (
        <div className="app-com">
            <div>
                <div align="left" onClick={() => { history.push('/TeacherProfile') }}>
                    <button className="button"> <RiLogoutBoxLine /> התנתק </button>
                </div>
            </div>
            {loading === false && <h1>הוספת כיתה חדשה</h1>}
            {errors === true && <h2>Cannot signup with provided credentials</h2>}

            <form onSubmit={onSubmit}>
                <label htmlFor='classID'>מזהה הכיתה</label> <br />
                <TextField
                    name='classID'
                    type='text'
                    value={classID}
                    onChange={e => setClassID(e.target.value)}
                    required
                />{' '}
                <br />
                <label htmlFor='className'>שם הכיתה</label> <br />
                <input
                    name='className'
                    type='number'
                    value={className}
                    onChange={e => setClassName(e.target.value)}
                    required
                />{' '}


                <br />
                <input type='submit' value='הרשמה' />
            </form>

        </div>
    );
};

export default Newclass;
