import logo from './logo.svg';
import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link,Routes} from "react-router-dom";
import './App.css';
import Dashboard from './component/Dashboard';

import AdminDashboard from './component/AdminDashboard';
import View_profile from './component/View_profile';
import Login from './component/login';
import Signup from './component/signup';
import Plant from "./component/Plant/Plant";
import Seed from "./component/Seed/Seed";
import Add from "./component/Plant/Add";
import PlantViewAll from "./component/Plant/PlantViewAll";
import Delete from "./component/Plant/Delete";
import Update from "./component/Plant/Update";
import SeedViewAll from "./component/Seed/SeedViewAll";
import SeedAdd from "./component/Seed/SeedAdd";
import SeedDelete from "./component/Seed/SeedDelete";
import SeedUpdate from "./component/Seed/SeedUpdate";


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
                      <Route path={"/admin/plant"} element={<Plant/>}/>
                      <Route path={"/admin/Seed"} element={<Seed/>}/>
                      <Route exact path={"/Plant/PlantViewAll"} element={<PlantViewAll/>}/>
                      <Route exact path={"/Plant/Add"} element={<Add/>}/>
                      <Route exact path={"/Plant/Delete"} element={<Delete/>}/>
                      <Route exact path={"/Plant/Update"} element={<Update/>}/>
                      <Route exact path={"/Seed/SeedViewAll"} element={<SeedViewAll/>}/>
                      <Route exact path={"/Seed/SeedAdd"} element={<SeedAdd/>}/>
                      <Route exact path={"/Seed/SeedDelete"} element={<SeedDelete/>}/>
                      <Route exact path={"/Seed/SeedUpdate"} element={<SeedUpdate/>}/>
                  </Routes>
                  
              </div>
          </Router>
      );
  }
}

export default App;