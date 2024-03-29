import { useHistory, useParams } from "react-router-dom";
import React, { useState, useEffect } from 'react';
import '../style.css'
import { useAuth } from "../../contexts/UserContext";
import { TextField } from "@material-ui/core";
import { addNewChallenge } from "../../actions/addNewChallenge";
import {RiLogoutBoxLine} from "react-icons/ri";
import img from "../imgs/image3.png";
import { useFetch } from "../../useAPI";


const AddNewChall = () => {
    const params = useParams();
    const [Title, setTitle] = useState('');
    const [Social, setSocial] = useState('');
    const [Emotional, setEmotional] = useState('');
    const [Study, setStudy] = useState('');
    const [Personal, setPersonal] = useState('');
    const [completed, setCompleted] = useState(false);

    const [errors, setErrors] = useState(false);
    const [loading, setLoading] = useState(true);
    const history = useHistory();
    const { userprofile } = useAuth();
    const { studentChallenges } = useFetch(`teacher/classes/1/student/44/challanges`, []);


    useEffect(() => {
        if (localStorage.getItem('token') !== null) {
            console.log('New Challenge has been added!');
        } else {
            setLoading(false);
        }
    }, []);

    const onSubmit = async e => {
        e.preventDefault();

        const student = {
            Title: Title,
            Social: Social,
            Emotional: Emotional,
            Study: Study,
            Personal: Personal,
            completed: completed,
            students: [params.student_id]

        };

        try {
        
            if(studentChallenges.find(challenge => challenge.Title === student.Title)){
            return ;
            }
            const data = await addNewChallenge(student);
            
            setTitle('');
            setSocial('');
            setEmotional('');
            setStudy('');
            setPersonal('');
            setCompleted('false');

            setErrors(false);


        } catch (error) {
            console.log(error)
        }

    };
 
    return (
        <div className="app-com">
            <div>
                <div align="left" onClick={() => { history.push('/Challenge') }}>
                    <button className="button"> אחורה </button>
                </div>
            </div>
            <div>
                <img className="profileImg"  src={img} alt="" />
            </div>
            {loading === false && <h1 className="text1">הוספת אתגר חדש</h1>}
            {/* {errors === true && <h2>Cannot signup with provided credentials</h2>} */}

            <form onSubmit={onSubmit} style={{marginTop: '50px'}} >
                <TextField
                    name='Title'
                    type='text'
                    placeholder="כותרת"
                    min="1"
                    max="5"
                    value={Title}
                    onChange={e => setTitle(e.target.value)}
                    required
                />{' '}
                <br />
                <label htmlFor='Social'>חברתי</label> <br />
                <input className="input"
                 min="1"
                 max="5"
                    name='Social'
                    type='number'
                    value={Social}
                    onChange={e => setSocial(e.target.value)}
                    required
                />{' '}
                <br />
                <label htmlFor='Emotional'>רגשי</label> <br />
                <input className="input"
                    name='Emotional'
                    min="1"
                    max="5"
                    type='number'
                    value={Emotional}
                    onChange={e => setEmotional(e.target.value)}
                    required
                />{' '}
                <br />
                <label htmlFor='Study'>לימודי</label> <br />
                <input className="input"
                    name='Study'
                    type='number'
                    value={Study}
                    min="1"
                    max="5"
                    onChange={e => setStudy(e.target.value)}
                    required
                />{' '}
                <br />
                <label htmlFor='Personal'> תפקודי</label> <br />
                <input className="input"
                    name='Personal'
                    type='number'
                    value={Personal}
                    onChange={e => setPersonal(e.target.value)}
                    required
                />{' '}
                <br />




                <br />
                <input  className="input" type='submit' value='הרשמה' />
            </form>

        </div>
    );
};

export default AddNewChall;
