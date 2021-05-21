import img from './image3.png'
import PropTypes from 'prop-types'
import React from 'react';
import {Redirect, Route, Router} from 'react-router-dom';
import studentlogin from './StudentLogin'
import teacherlogin from './TeacherLogin'
import AdminLogin from './AdminLogin'
import { useHistory } from 'react-router-dom';


const Loginpage = () => {
  const history = useHistory();

  const heIsAdmin = () => {
    history.push('/AdminLogin');
  }
  const heIsTeacher = () => {
    history.push('/TeacherLogin');
  }
  const heIsStudent = () => {
    history.push('/StudentLogin');
  }
  return (
    <header>
      <h1>Welcome to ChallengeMe</h1>
      <div>
        <img src={img} alt=""/>
      </div>
        <h2>האם אתה</h2>
      <div>
        <button style={headingStyle} onClick={heIsAdmin} >מנהל</button>
      </div>
      <div>
        <button style={headingStyle} onClick={heIsTeacher} >מורה</button> 
      </div>
      <div>
        <button style={headingStyle} onClick={heIsStudent}>תלמיד</button>
      </div>
    </header>
  )
}
const headingStyle = {
  color: 'black',
  backgroundColor: 'white',
  fontsize:120,
  padding: '30px 80px',
  borderradius: '5px',
  margin: '20px 0px',
  cursor: 'pointer',
}

export default Loginpage 