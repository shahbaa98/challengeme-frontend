import { useHistory } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
//import decodeJwt from 'jwt-decode';
import { useAuth } from '../contexts/UserContext';
import img from './imgs/image3.png'

import './style.css'
import { login } from '../actions/login';


const Loginpage = () => {
  const { authenticate, userprofile } = useAuth();
  const history = useHistory();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  // const [role, setRole] = useState('')
  const [errors, setErrors] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!userprofile) return;

    if (userprofile.role === 'Student') {
      history.push('/StudentProfile')
    }
    if (userprofile.role === 'Principal') {
      history.push('/PrincipalProfile')
    }
    if (userprofile.role === 'Caretaker') {
      history.push('/CaretakerProfile')
    }
    if (userprofile.role === 'Teacher') {
      history.push('/TeacherProfile')
    }
  }, [userprofile]);

  useEffect(() => {
    if (localStorage.getItem('token') !== null) {
      if (userprofile.role === 'Student') {
        history.push('/StudentProfile')
      }
      if (userprofile.role === 'Principal') {
        history.push('/PrincipalProfile')
      }
      if (userprofile.role === 'Caretaker') {
        history.push('/CaretakerProfile')
      }
      if (userprofile.role === 'Teacher') {
        history.push('/TeacherProfile')
      }
    } else {
      setLoading(false);
    }
  }, []);

  const onSubmit = async e => {
    e.preventDefault();

    try {
      const response = await login(email, password);

      authenticate(response.data.key);
    } catch {
      setEmail('');
      setPassword('');
      localStorage.clear();
      setErrors(true);
    }

  };


  return (
    <div className="app-com">
      <div>
        <img align="left" src={img} alt="" width="200" height="200" />
      </div>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      {loading === false && <h1>התחבר</h1>}
      {errors === true && <h2>אי אפשר לכנס עם הנתונים שהכנסת</h2>}
      {loading === false && (
        <form onSubmit={onSubmit}>
          <input className="placeholder"
            name='email'
            type='email'
            value={email}
            required placeholder="שם משתמש"
            onChange={e => setEmail(e.target.value)}
          />{' '}
          <br />
          <input className="placeholder"
            name='password'
            type='password'
            value={password}
            required placeholder="סיסמה"
            onChange={e => setPassword(e.target.value)}
          />{' '}
          <br />
          <input className="buttonStyle" type='submit' value='התחבר' />
        </form>
      )}
    </div>
  );
};

export default Loginpage


