import React from 'react';
import axios from 'axios';
import './style/signup.css'
import Button from '@mui/material/Button';


export default class Signup extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            username : '' ,
            password:'',
            customerEmail:'',
            customerName:'',
            // address:[
            //     {
            //         houseNo:'',
            //         colony:'',
            //         city:'',
            //         State:'',
            //         pincode:''
            //     }
            // ]
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

    }

    handleChange(event){
        this.setState({
            [event.target.name] : event.target.value
        });
    }
    handleSubmit(event){
        event.preventDefault();
        

        const user = {


            password : this.state.password,
            username : this.state.username,
            customerEmail: this.state.customerEmail,
            customerName : this.state.customerName,
            // address:[
            //     {
            //         houseNo:this.state.houseNo,
            //         colony:this.state.colony,
            //         city:this.state.city,
            //         State:this.state.State,
            //         pincode:this.state.pincode
            //     }
            // ]
        
           

        };
        console.log(user);
        axios.post(`http://localhost:8080/customer/register`,user)
            .then(res=>{
                console.log(res.data)
                alert("Successfully added")
            })
            .catch((er)=>alert("user already exists"))

    }
   


    render(){
        // const{houseNo,colony,city,State,pincode} = this.state.address;
        return(
            <form  ref="form" onSubmit={this.handleSubmit}>

                <div>
                        <div>
                            <label >User Name</label>
                            <input type="text" name="username" onChange={this.handleChange} className="form-control" id="exampleusername1" placeholder="User Name" value={this.state.username} required />
                        </div>
                    </div>
                
                <div>
                    <div>
                        <label>Password</label>
                        <input type="password" name="password" onChange={this.handleChange} className="form-control" id="exampleInputPassword1" placeholder="Password" value={this.state.password} required/>
                    </div>

                </div>

                <div>
                    <div>
                        <label>Email</label>
                        <input type="email" name="customerEmail" onChange={this.handleChange} className="form-control" id="email1" placeholder="email" value={this.state.customerEmail} required/>
                    </div>

                </div>

                <div>
                        <div>
                            <label >Customer Name</label>
                            <input type="text" name="customerName" onChange={this.handleChange} className="form-control" id="customername1" placeholder="Customer Name" value={this.state.customerName} required />
                        </div>
                </div>

                {/* <div>
                    <div>
                        <label>houseNo</label>
                        <input type="text" name="houseNo" onChange={this.handleChange} className="form-control" id="houseNo1" placeholder="houseNo" value={this.state.houseNo} required />
                    </div>
                </div>
                <div>
                    <div>
                        <label>colony</label>
                        <input type="text" name="colony" onChange={this.handleChange} className="form-control" id="colony1" placeholder="colony" value={this.state.colony} required />
                    </div>
                </div>
                <div>
                    <div>
                        <label>city</label>
                        <input type="text" name="city" onChange={this.handleChange} className="form-control" id="city1" placeholder="city" value={this.state.city} required />
                    </div>
                </div>
                <div>
                    <div>
                        <label>State</label>
                        <input type="text" name="State" onChange={this.handleChange} className="form-control" id="State1" placeholder="State" value={this.state.State} required />
                    </div>
                </div>
                <div>
                    <div>
                        <label>pincode</label>
                        <input type="number" name="pincode" onChange={this.handleChange} className="form-control" id="pincode1" placeholder="pincode" value={this.state.pincode} required />
                    </div>
                </div> */}
                <br/>

                <div>
                    <div>
                        
                    <Button type ="submit" variant="contained">Submit</Button>
                        
                    </div>
                </div>
                
            
            </form>
            

        )
    }
}

