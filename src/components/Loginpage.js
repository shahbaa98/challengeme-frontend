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

    <header style={header1}>

      <div>
        <img align="center" src={img} alt=""/>
      </div>
        <br/>
        <h1>Challenge Me</h1>
        <h2>התחבר</h2>
      <div>
        <button className="buttonStyle" onClick={heIsAdmin} >מנהל</button>
      </div>
      <div>
        <button className="buttonStyle"  onClick={heIsTeacher} >מורה</button>
      </div>
      <div>
        <button className="buttonStyle"  onClick={heIsStudent}>תלמיד</button>
      </div>
    </header>
  )
}
const header1 = {
    backgroundColor: 'cornsilk',
    color: 'black',
    fontsize:120,
    textAlign:'center',

}



export default Loginpage
