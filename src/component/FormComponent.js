import React, { Component } from 'react'

class FormComponent extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             username:"",
             password:"",
             usertype:"Business",
             gender:"",
             file:null
        }

        this.register = this.register.bind(this)
    }

    register(event){
        console.log(this.state);
        //if you are using form make sure that you use below line to avoid page refresh and prevent the previous state
        event.preventDefault();
    }
    

    render() {
        return (
            <div>
            {/* Use onSubmit method to submit the form not in Click method */}
            <form onSubmit={this.register}>
                <div>
                    <label>Username</label><br/>
                    <input 
                        value={this.state.username} 
                        onChange={(event) => this.setState({username:event.target.value})} 
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
                <div>
                    <input 
                        onChange={(event) => {this.setState({file:event.target.files[0]})}} 
                        type="file" 
                        required
                    />
                </div><br/>
                <div>
                    <label>UserType</label><br />
                    <select value={this.state.usertype} onChange={(event) => {this.setState({usertype:event.target.value})}}>
                        <option  value="Business">Business</option>
                        <option  value="Normal">Normal</option>
                    </select>
                </div><br/>
                <div>
                    <label>Male</label>
                    <input type="radio" onChange={() => this.setState({gender:"Male"})} name="gender" required></input>
                    <label>Female</label>
                    <input type="radio" onChange={() => this.setState({gender:"Female"})} name="gender" required></input>
                </div>
                <br/>
                {/* <button onClick={this.register}>Submit</button> */}
                <button type="submit">Submit</button>
            </form>
            </div>
        )
    }
}

export default FormComponent
