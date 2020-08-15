import React, { Component } from 'react'

class EventBinding extends Component {
    constructor(props) {
        super(props)

        this.state = {
            message:"Hello"
        }

        //bind the event method at constructor mentioned in the react documentation
        this.clickHandler  = this.clickHandler.bind(this)
    }

    //don't try to bind the the state to render method during calling of method becase for each click
    //it will reload the dom performance issue
    clickHandler(){
        console.log(this)
        this.setState({
            message:'Goodbye!'
        })
    }

    // clickHandler = () =>{
    //     console.log(this)
    //     this.setState({
    //         message:'Goodbye!'
    //     })
    // }



    render() {
        return (
            <div>
                <div>{this.state.message}</div>
                <button onClick={this.clickHandler}>Click</button>
            </div>
        )
    }
}

export default EventBinding
