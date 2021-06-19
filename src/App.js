import Loginpage from './components/Loginpage'
import StudentProfile from './components/student/StudentProfile'
import TeacherProfile from './components/Teacher/TeacherProfile'
import CaretakerProfile from './components/CaretakerProfile'
import PrincipalProfile from './components/PrincipalProfile'
import SignUp from './components/SignUp'
import notification from './components/student/notification'
import challenges from './components/student/challenges'
import Chat1 from './components/Teacher/Chat1'
import notification1 from './components/Teacher/notification1'
import Classes from './components/Teacher/Classes'
import Newclass from './components/Teacher/Newclass'
import AddStudent from "./components/Teacher/AddStudent";
import SearchStudent from "./components/Teacher/SearchStudent";
import AddNewChall from "./components/Teacher/AddNewChall";


// import './App.css'
import { Switch, Route } from 'react-router-dom'
import { BrowserRouter as Router } from 'react-router-dom'
import React from "react";
import { UserProvider } from './contexts/UserContext'


function App() {

  return (
    <UserProvider>
      <Router>
        <Switch>
          <Route exact path='/' component={Loginpage} />
          <Route exact path='/StudentProfile' component={StudentProfile} />
          <Route exact path='/TeacherProfile' component={TeacherProfile} />
          <Route exact path='/CaretakerProfile' component={CaretakerProfile} />
          <Route exact path='/PrincipalProfile' component={PrincipalProfile} />
          <Route exact path='/SignUp' component={SignUp} />
          <Route exact path='/notification' component={notification} />
          <Route exact path='/challenges' component={challenges} />
          <Route exact path='/Chat1' component={Chat1} />
          <Route exact path='/notification1' component={notification1} />
          <Route exact path='/AddStudent' component={AddStudent} />
          <Route exact path='/SearchStudent' component={SearchStudent} />
          <Route exact path='/Classes' component={Classes} />
          <Route exact path='/newclass' component={Newclass} />
          <Route exact path='/AddNewChall' component={AddNewChall} />
        </Switch>
      </Router>
    </UserProvider>

  );
}

export default App;
