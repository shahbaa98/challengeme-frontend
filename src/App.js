import Loginpage from './components/Loginpage'
import StudentProfile from './components/student/StudentProfile'
import TeacherProfile from './components/Teacher/TeacherProfile'
import CaretakerProfile from './components/CaretakerProfile'
import PrincipalProfile from './components/PrincipalProfile'
import SignUp from './components/SignUp'
import notification from './components/student/notification'
import challenges from './components/student/challenges'
import Chat1 from './components/Teacher/Chat1'
import Notification1 from './components/Teacher/Notification1'
import Classes from './components/Teacher/Classes'
import Newclass from './components/Teacher/Newclass'
import StudentClass from './components/Teacher/StudentClass'
import AddStudent from "./components/Teacher/AddStudent";
import SearchStudent from "./components/Teacher/SearchStudent";
import AddNewChall from "./components/Teacher/AddNewChall";
import { PrivateRoute, PublicRoute } from "./helpers/router";

import StudentReportProfile from "./components/Teacher/StudentReportProfile";
import Plan from "./components/Teacher/Plan";
import Report from "./components/Teacher/Report";


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
          <PrivateRoute exact path='/notification' component={notification} />
          <PrivateRoute exact path='/challenges' component={challenges} />
          <PrivateRoute exact path='/Chat1' component={Chat1} />
          <PrivateRoute exact path='/Notification1' component={Notification1} />
          <PrivateRoute exact path='/AddStudent' component={AddStudent} />
          <PrivateRoute exact path='/SearchStudent' component={SearchStudent} />
          <PrivateRoute exact path='/classes' component={Classes} />
          <PrivateRoute exact path='/classes/:class_id' component={StudentClass} />
          <PrivateRoute exact path='/Newclass' component={Newclass} />
          <PrivateRoute exact path='/students/:student_id/add-challenge' component={AddNewChall} />
          <PrivateRoute exact path='/students/:student_id/profile' component={StudentReportProfile} />
          <PrivateRoute exact path='/Plan' component={Plan} />
          <PrivateRoute exact path='/Report' component={Report} />

        </Switch>
      </Router>
      <ToastContainer />
    </UserProvider>
  );
}

export default App;
