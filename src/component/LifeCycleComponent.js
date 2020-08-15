import React, { Component } from 'react'

class LifeCycleComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            name:"Vipin"
        }
        console.log('Lifecycle Constructor')

        this.changeName = this.changeName.bind(this)
    }

    //this method should return the either null or updated value of state
    //this method is used when state depends upon the props
    //you can not call any AJAX call
    static getDerivedStateFromProps(props,state){
        console.log("LifeCycle getDerivedStateFromProps")
        return null
    }

    //do all the http request here
    componentDidMount(){
        console.log("Lifecycle componentDidMount")
        console.log(this.state)
    }

    shouldComponentUpdate(){
        console.log("Lifecycle ShouldComponentUpdate")
        return true
    }

    getSnapshotBeforeUpdate(prevProps, prevState){
        console.log("Lifecycle getSnapshotBeforeUpdate")
        return null
    }

    componentDidUpdate(){
        console.log("Lifecycle componentDidUpdate")
    }

    componentWillUnmount(){
        //perform all unmount here
        //just perform cancellation of all ajax request
        //unsubcribe the services
        //don't set the state here
        console.log("Unmounting the component")
    }

    changeName(){
        this.setState({
            name:"Vipin Sharma"
        }, () =>{
            console.log("Updated State",this.state)
        });
    }

    render() {
        console.log("Lifecycycle render")
        return (
            <div>
                <h4>LifeCycle of Component</h4>
                <h6>Chaning the DOM to Identify the Order of Execution of Update Lifecycle</h6>
                <h5>Name : {this.state.name}</h5>
                <button onClick={this.changeName}>Update State</button>
            </div>
        )
    }
}

export default LifeCycleComponent
