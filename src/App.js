import Loginpage from './components/Loginpage'
import StudentProfile from './components/student/StudentProfile'
import TeacherProfile from './components/Teacher/TeacherProfile'
import CaretakerProfile from './components/CaretakerProfile'
import PrincipalProfile from './components/PrincipalProfile'
import SignUp from './components/SignUp'
import notification from './components/student/notification'
import challenges from './components/student/challenges'
import chat1 from './components/Teacher/chat1'
import notification1 from './components/Teacher/notification1'
import classes from './components/Teacher/classes'
import AddStudent from "./components/Teacher/AddStudent";
import SearchStudent from "./components/Teacher/SearchStudent";
import addNewChall from "./components/Teacher/addNewChall";

// import './App.css'
import {Switch, Route} from 'react-router-dom'
import { BrowserRouter as Router } from 'react-router-dom'
import React from "react";
import { useForm, Controller } from "react-hook-form";
import { TextField, Checkbox } from "@material-ui/core";
import {Modal} from "./components/Teacher/Modal";


function App() {

  return (

      <Router>
      <Switch>
       <Route  exact path='/' component={Loginpage} />
       <Route exact path='/StudentProfile' component={StudentProfile} />
       <Route exact path='/TeacherProfile' component={TeacherProfile} />
       <Route exact path='/CaretakerProfile' component={CaretakerProfile} />
       <Route exact path='/PrincipalProfile' component={PrincipalProfile} />
       <Route exact path='/SignUp' component={SignUp} />
       <Route exact path='/notification' component={notification} />
       <Route exact path='/challenges' component={challenges} />
       <Route exact path='/chat1' component={chat1} />
       <Route exact path='/notification1' component={notification1} />
       <Route exact path='/AddStudent' component={AddStudent}/>
       <Route exact path='/SearchStudent' component={SearchStudent}/>
       <Route exact path='/classes' component={classes}/>
       <Route exact path='/addNewChall' component={addNewChall}/>
      </Switch>
    </Router>

  );
}

export default App;
