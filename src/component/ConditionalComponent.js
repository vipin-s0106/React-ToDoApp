import React, { Component } from 'react'

class ConditionalComponent extends Component {
constructor(props) {
    super(props)

    this.state = {
         isLoggedIn: true
    }
}


    render() {
        let message
        if (this.state.isLoggedIn){
            message = <div>Welcome Vipin</div>
        }
        else{
            message = <div>Welcome Guest</div>
        }

        
        return (
            <div>
                {message}
            </div>
        )

        // return (
        //         this.setState.isLoggedIn ?
        //         (<div>Welcome Vipin</div>):
        //         (<div>Welcome Guest</div>)
        // )
    }
}

export default ConditionalComponent
