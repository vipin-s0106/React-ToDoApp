import React, { Component } from 'react'
import UpdatedComponent from './HigherOrderCounter'

export class ClickHigherOrderComponent extends Component {
    render() {
        return (
            <div>
                <button onClick={this.props.incrementCounter}>{this.props.name} Clicked {this.props.count} Times</button>
            </div>
        )
    }
}

export default UpdatedComponent(ClickHigherOrderComponent)
