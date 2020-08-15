import React, { Component } from 'react'

export class RegularComponent extends Component {
    render() {
        console.log("Regular Compoenet")
        return (
            <div>
               Regular Component  {this.props.name}
            </div>
        )
    }
}

export default RegularComponent
