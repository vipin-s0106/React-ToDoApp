import React, { Component } from 'react'
import { UserConsumer } from '../context/userContext'

export class ComponentC extends Component {
    render() {
        return (
            <div>
                <h5>Component C with Consuming the Context API</h5>
                <UserConsumer>
                    {
                        (loggedin) =>{
                            if (loggedin){
                                return <div>You are LoggedIn</div>
                            }else{
                               return <div>You are LoggedOff</div>
                            }
                        }
                    }
                </UserConsumer>
            </div>
        )
    }
}

export default ComponentC
