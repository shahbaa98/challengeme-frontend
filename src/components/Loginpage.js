import img from './imgs/logoChallengeMe.png'
import PropTypes from 'prop-types'
import React from 'react';
import {Redirect, Route, Router} from 'react-router-dom';
import studentlogin from './StudentLogin'
import teacherlogin from './TeacherLogin'
import AdminLogin from './AdminLogin'
import TherapistLogin from "./TherapistLogin";
import './style.css'


import { useHistory } from 'react-router-dom';


const Loginpage = () => {
  const history = useHistory();


  const heIsStudent = () => {
      history.push('/StudentLogin');
  const heIsAdmin = () => {
    history.push('/AdminLogin');
  }
  const heIsTeacher = () => {
    history.push('/TeacherLogin');
  }
  const heIsTherapist = () => {
        history.push('/TherapistLogin');
  }
  }

  return (
    <div className="app-com">
      <div>
        <img align="center" src={img} alt=""/>
      </div>
        <br/>
        <h2 className = "connect">התחבר</h2>
      <div>
        <button className="buttonStyle" onClick={heIsAdmin} >מנהל</button>
      </div>
      <div>
        <button className="buttonStyle"  onClick={heIsTeacher} >מורה</button>
      </div>
      <div>
        <button className="buttonStyle"  onClick={heIsTherapist}>מטפל</button>
      </div>
        <div>
            <button className="buttonStyle"  onClick={heIsStudent}>תלמיד</button>
        </div>
    </div>
  )
}


export default Loginpage
