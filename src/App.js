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
import TeacherLogin from './components/TeacherLogin'
import AdminLogin from './components/AdminLogin'
import StudentProfile from './components/StudentProfile'
import TeacherProfile from './components/TeacherProfile'
import AdminProfile from './components/AdminProfile'
import './App.css'
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
       <Route exact path='/AdminLogin' component={AdminLogin} />
       <Route exact path='/StudentProfile' component={StudentProfile} />
       <Route exact path='/TeacherProfile' component={TeacherProfile} />
       <Route exact path='/AdminProfile' component={AdminProfile} />
      </Switch>
    </Router>
  );
}

export default App;