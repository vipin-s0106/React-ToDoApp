import React, { Component } from 'react'
import UpdatedComponent from './HigherOrderCounter'

export class HoverHigherOrderComponent extends Component {
    render() {
        return (
            <h2 onMouseOver={this.props.incrementCounter}>
                {this.props.name} Hover {this.props.count} Times
            </h2>
        )
    }
}

export default UpdatedComponent(HoverHigherOrderComponent)
