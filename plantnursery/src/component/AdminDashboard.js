import React from "react";
import { Routes } from "react-router-dom";
import { Route, Link,} from "react-router-dom";
import './style/sidebar.css'
import Login from "./login";

const AdminDashboard = () => {
    return(
        <div className="Heading">
         <h2>Welcome Admin {localStorage.getItem("username")}</h2>

         <div className="container-sidebar">
        

        <ul className="sidebar">
    
            <li><span>ADMIN</span></li>
           
            <li><span></span><span><Link to='/admin/dignostic-center' style={{ textDecoration: 'none' }} >Diagnostic center </Link></span></li>
            <li><span></span><span><Link to='/admin/add/test'>Diagnostic Test</Link></span></li>
            <li><span></span><span><Link to="/admin/view_alluser"></Link></span></li>
      
            <li><span></span><span><Link to="/admin/remove_user">Patient</Link></span></li>
            <li><span></span><span><Link to="/login" style={{ textDecoration: 'none' }}>Logout</Link></span></li>
            
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

export default AdminDashboard;