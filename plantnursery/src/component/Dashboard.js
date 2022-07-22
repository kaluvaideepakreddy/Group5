import React from 'react';
//import { Navbar } from 'react-bootstrap';
import './style/sidebar.css'
import { Route, Link,  Routes} from "react-router-dom";
import Login from "./login";
//import Profile from './profile';
//import Take_test from './take_test';
const Dashboard = () => {
        return(
            <div>
             <h2>Welcome {localStorage.getItem("username")}</h2>
             <div className="container-sidebar-user">
        

        <ul className="sidebar">
                
          
            <li><span><i className="fa fa-users"></i></span><span>
                ViewProfile
            <Link to="/user/view_profile" style={{ textDecoration: 'none' ,color:'orange' }} >View profile</Link>
                </span></li>
           
            <li><span><i className="fa fa-gear"></i></span><span>
                Login
            <Link to="/login" style={{ textDecoration: 'none' ,color:'orange' }}>Logout</Link>
            </span></li>
           
            <Routes>
                    <Route exact path="/login" component={Login} />
                
            </Routes>
        </ul>
     

        <div className="content">

        </div>
    </div>
        </div>
        );

    
}

export default Dashboard;