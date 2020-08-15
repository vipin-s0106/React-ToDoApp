import React, { Component } from 'react'
import './Person.css';

export class Person extends Component {
    render() {     
        const {name,age,skill,avatar} = this.props.person;   
        return (
            <div className="person">
                <img src={avatar} alt="Avatar" className="person__image"></img>
                <div className="person__detail">
                    <h4>My name is {name}.</h4>
                    <p>I am {age} old.</p>
                    <p>I know {skill}.</p>
                </div> 
            </div>
        )
    }
}

export default Person
