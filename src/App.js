// import Loginpage from './components/Loginpage'
// import StudentLogin from './components/StudentLogin'
// import TeacherLogin from './components/TeacherLogin'
// import AdminLogin from './components/AdminLogin'
// import StudentProfile from './components/StudentProfile'
// import TeacherProfile from './components/TeacherProfile'
// import AdminProfile from './components/AdminProfile'
// import './App.css'
// import {Switch, Route} from 'react-router-dom'
// import { BrowserRouter as Router } from 'react-router-dom'
// import React, { Component } from 'react'

// class App extends Component{
//   constructor(props){
//     super(props);
//     this.state = {
//       activeItem: {
//         email: "",
//         password: "",
//       },
//       AuthenticationList = []
//     }
//   }
//   async componentDidMount() {
//     try {
//       const res = await fetch('http://localhost:8000/api//');
//       const todoList = await res.json();
//       this.setState({
//         AuthenticationList
//       });
//     } catch (e) {
//       console.log(e);
//   }
//   }
//   return (

//     <Router>
//       <Switch>
//        <Route  exact path='/' component={Loginpage} />
//        <Route exact path='/StudentLogin' component={StudentLogin} />
//        <Route exact path='/TeacherLogin' component={TeacherLogin} />
//        <Route exact path='/AdminLogin' component={AdminLogin} />
//        <Route exact path='/StudentProfile' component={StudentProfile} />
//        <Route exact path='/TeacherProfile' component={TeacherProfile} />
//        <Route exact path='/AdminProfile' component={AdminProfile} />
//       </Switch>
//     </Router>
//   );
// }

// export default App;

import Loginpage from './components/Loginpage'
import StudentLogin from './components/StudentLogin'
import TherapistLogin from "./components/TherapistLogin";
import TeacherLogin from './components/TeacherLogin'
import AdminLogin from './components/AdminLogin'
import StudentProfile from './components/student/StudentProfile'
import TeacherProfile from './components/TeacherProfile'
import TherapistProfile from "./components/TherapistProfile";
import AdminProfile from './components/AdminProfile'
import chat from './components/student/chat'
import notification from './components/student/notification'
import challenges from './components/student/challenges'

// import './App.css'
import {Switch, Route} from 'react-router-dom'
import { BrowserRouter as Router } from 'react-router-dom'
import React from 'react'

function App() {
  
  return (
    

      <Router>
      <Switch>
       <Route  exact path='/' component={Loginpage} />
       <Route exact path='/StudentLogin' component={StudentLogin} />
       <Route exact path='/TeacherLogin' component={TeacherLogin} />
       <Route exact path='/TherapistLogin' component={TherapistLogin} />
       <Route exact path='/AdminLogin' component={AdminLogin} />
       <Route exact path='/StudentProfile' component={StudentProfile} />
       <Route exact path='/TeacherProfile' component={TeacherProfile} />
       <Route exact path='/TherapistProfile' component={TherapistProfile} />
       <Route exact path='/AdminProfile' component={AdminProfile} />
       <Route exact path='/chat' component={chat} />
       <Route exact path='/notification' component={notification} />
       <Route exact path='/challenges' component={challenges} />
      </Switch>
    </Router>
    
  );
}

export default App;
