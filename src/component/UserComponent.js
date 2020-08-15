import React, { Component } from 'react'
import axios from 'axios';
import { Redirect } from "react-router-dom";

export class UserComponent extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             loggedIn:false,
             email:"",
             password:"",
             redirect:false
        }

        this.login = this.login.bind(this)
    }

    login(event){
        event.preventDefault();

        console.log(this.state)
        axios
            .post('http://localhost:3200/user/login',this.state)
            .then(response =>{
                console.log(response)
                // alert(response.data.access)
                localStorage.setItem('token',response.data.access)
                this.setState({
                    redirect:true
                })
            })
            .catch(err =>{
                alert(err.message)
            })
        
    }
    
    render() {
        if(this.state.redirect){
            return <Redirect to='/dashboard' />
        }else{
            return (
                <div>
                    <form onSubmit={this.login}>
                        <div>
                            <label>Email</label><br/>
                            <input 
                                value={this.state.email} 
                                onChange={(event) => this.setState({email:event.target.value})} 
                                type="text" 
                                required
                            />
                        </div>
                        <div>
                            <label>Password</label><br/>
                            <input 
                                value={this.state.password} 
                                onChange={(event) => {this.setState({password:event.target.value})}} 
                                type="password" 
                                required
                            />
                        </div><br/>
                        <button type="submit">Login</button>
                    </form>
                </div>
            )
        }
    }
}

export default UserComponent
