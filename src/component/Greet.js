import React , { Component } from 'react';


class Greet extends Component{

    constructor(props){
        super(props);

        this.state = {
            count : 0
        };
    }


    //automatically doing the event binding
    increment = () => {
        // this.setState(prevState =>
        //     {count:this.state.count+1}, () =>{
        //         console.log("Callback func - ",this.state.count)
        // });
        // console.log("Async call - ",this.state.count)

        //always use prevState if want to update the state based on prev value best practice
        this.setState(prevState =>({
            count: prevState.count + 1
        }))
    }

    render(){
        return (
        <div>
            <h1>Hello {this.props.name}</h1>
            {this.props.children}
            <h4>Count : {this.state.count}</h4>
            <button onClick={this.increment} style={{backgroundColor:"red",fontSize:20,borderRadius:10}}>Increment</button>
            
        </div>
        );
    }
}

export default Greet;