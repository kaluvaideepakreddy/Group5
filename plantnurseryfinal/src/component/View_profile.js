import React from 'react';
import axios from 'axios';
import './style/view_profile.css';



export default class View_profile extends React.Component {
    state = {
      values: []
    }
  
    componentDidMount() {
      axios.get(`http://localhost:8080/User/getall`)
        .then(res => {
          const values = res.data;
         console.log(values);
           this.setState({values});
        }).catch((er)=>alert("some error"))
    }
    render() {
        
      return (
  
      <div>
        <h1>View Profile</h1>
          <div className='view_profile'>
            
               <ul className='view_ui'>
           {
            this.state.values
              .map((values,Index) =>
       
                <li  key={Index}>
                    Name : {values.username} || id:{values.id}  </li>
              )
          }  
        </ul>
          </div>

          </div>  
      )
    }
  }