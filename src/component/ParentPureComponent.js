import React, { Component } from 'react'
import PureComponent1 from './PureComponent1'
import RegularComponent from './RegularComponent'
import MemoComponent from './MemoComponent'

export class ParentPureComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            name:"vipin"
        }
    }

    componentDidMount(){
        setInterval(() =>{
            this.setState({
                name:'vipin'
            })
        }, 2000)
    }


    render() {
        console.log("***** Parent Component ******")
        return (
            <div>
                Parent Component
                <PureComponent1 name={this.state.name}></PureComponent1>
                <RegularComponent name={this.state.name}></RegularComponent>
                <MemoComponent name={this.state.name}></MemoComponent>
            </div>
        )
    }
}

export default ParentPureComponent
