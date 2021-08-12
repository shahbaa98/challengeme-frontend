import Loginpage from './components/Loginpage'
import StudentProfile from './components/student/StudentProfile'
import Chat from './components/student/Chat'
import TeacherChat from './components/Teacher/TeacherChat'

import TeacherProfile from './components/Teacher/TeacherProfile'
import CaretakerProfile from './components/CaretakerProfile'
import PrincipalProfile from './components/PrincipalProfile'
import SignUp from './components/SignUp'
import StudentNotifications from './components/student/StudentNotifications'
import challenges from './components/student/challenges'
import Notification1 from './components/Teacher/Notification1'
import Classes from './components/Teacher/Classes'
import Newclass from './components/Teacher/Newclass'
import StudentClass from './components/Teacher/StudentClass'
import AddStudent from "./components/Teacher/AddStudent";
import SearchStudent from "./components/Teacher/SearchStudent";
import AddNewChall from "./components/Teacher/AddNewChall";
import ChallengeRecommendation from "./components/Teacher/ChallengeRecommendation";
import Challenge from "./components/Teacher/Challenge";
import ChallengesHistory from "./components/Teacher/ChallengesHistory";
import { PrivateRoute, PublicRoute } from "./helpers/router";
import OneChallenge from "./components/student/OneChallenge.js";

import StudentReportProfile from "./components/Teacher/StudentReportProfile";
import Plan from "./components/Teacher/Plan";
import Report from "./components/Teacher/Report";
import newplan from "./components/Teacher/newplan";



// import './App.css'
import { Switch, Route } from 'react-router-dom'
import { BrowserRouter as Router } from 'react-router-dom'
import React from "react";
import { UserProvider } from './contexts/UserContext'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <UserProvider>
      <Router>
        <Switch>
          <Route exact path='/' component={Loginpage} />
          <Route exact path='/SignUp' component={SignUp} />
          <PrivateRoute exact path='/StudentProfile' component={StudentProfile} />
          <PrivateRoute exact path='/TeacherProfile' component={TeacherProfile} />
          <PrivateRoute exact path='/CaretakerProfile' component={CaretakerProfile} />
          <PrivateRoute exact path='/PrincipalProfile' component={PrincipalProfile} />
          <PrivateRoute exact path='/StudentNotifications' component={StudentNotifications} />
          <PrivateRoute exact path='/challenges' component={challenges} />
          <PrivateRoute exact path='/Notification1' component={Notification1} />
          <PrivateRoute exact path='/AddStudent' component={AddStudent} />
          <PrivateRoute exact path='/SearchStudent' component={SearchStudent} />
          <PrivateRoute exact path='/classes' component={Classes} />
          <PrivateRoute exact path='/classes/:class_id' component={StudentClass} />
          <PrivateRoute exact path='/Newclass' component={Newclass} />
          <PrivateRoute exact path='/add-challenge' component={AddNewChall} />
          <PrivateRoute exact path='/students/:student_id' component={StudentReportProfile} />
          <PrivateRoute exact path='/challanges/:challanges_id' component={OneChallenge} />
          <PrivateRoute exact path='/Plan' component={Plan} />
          <PrivateRoute exact path='/Report' component={Report} />
          <PrivateRoute exact path='/Chat' component={Chat} />
          <PrivateRoute exact path='/TeacherChat' component={TeacherChat} />
          <PrivateRoute exact path='/newplan' component={newplan} />
          <PrivateRoute exact path='/ChallengeRecommendation' component={ChallengeRecommendation} />
          <PrivateRoute exact path='/Challenge' component={Challenge} />
          <PrivateRoute exact path='/ChallengesHistory' component={ChallengesHistory} />

          
          TeacherChat
        </Switch>
      </Router>
      <ToastContainer />
    </UserProvider>
  );
}

export default App;
