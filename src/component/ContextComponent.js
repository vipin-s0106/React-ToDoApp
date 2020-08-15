import React, { Component } from 'react'
import ComponentA from './ComponentA'
import { UserProvider } from '../context/userContext'


//Context is used for to pass the value from one component to
//other component without passing value at every entry level
export class ContextComponent extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             loggedIn:false
        }
    }

    componentDidMount(){
        if (localStorage.getItem('token')){
            this.setState({
                loggedIn:true
            })
        }
    }
    
    render() {
        return (
            <div>
                <h5>Context Passing from ContextParent Component here as LoggedIn value</h5>
                <UserProvider value={this.state.loggedIn}>
                    <ComponentA />
                </UserProvider>
            </div>
        )
    }
}

export default ContextComponent
