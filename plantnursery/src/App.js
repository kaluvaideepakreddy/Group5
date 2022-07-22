import logo from './logo.svg';
import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link,Routes} from "react-router-dom";
import './App.css';
import Dashboard from './component/Dashboard';

import AdminDashboard from './component/AdminDashboard';
import View_profile from './component/View_profile';
import Login from './component/login';
import Signup from './component/signup';


// const Home = () =>{
//   localStorage.clear();
//   //console.log(localStorage.getItem("loggedIn") == null)
// return(
//     <div className='bg-home'>
//         <h2>Plant Nursery</h2>
//         <div >
//              <img className='img' src={pic} alt=""></img>
//         </div>
//     </div>

// );
// }

class App extends Component {  
  constructor(props){
      super(props);
      this.state={
          loggedIn :false
      } 
  }
  render() {  
     
      return (
          <Router>
              <div className="App">
                  <nav className="navbar">
                      <ul className="nav nav-pills nav-options">
                          <li><Link to="/"><h3 className="nav-bar-options">Home</h3></Link></li>
                          <li><Link to="/login"><h3 className={'nav-bar-options '+ (localStorage.getItem("loggedIn")!=null ? 'd-none':'')}  >Log In</h3></Link></li>
                          <li><Link to="/signup"><h3 className="nav-bar-options">Sign Up</h3></Link></li>
                      </ul>
                    </nav> 
                  <br/>
                  <Routes>
                      {/* <Route exact path="/" element={<Home/>} /> */}
                      <Route exact path="/login" element={<Login/>}/> 
                      <Route exact path="/signup/" element={<Signup/>} />
                      <Route exact path="/login/Dashboard/" element={<Dashboard/>} /> 
                      <Route exact path="/login/AdminDashboard"  element={<AdminDashboard/>} /> 
                      <Route exact path="/user/view_profile" element={<View_profile/>} />
                  </Routes>
                  
              </div>
          </Router>
      );
  }
}

export default App;