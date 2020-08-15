import React, { Component } from 'react'
import ChildComponent from './ChildComponent'


//In this File passing method as props and recieveing the message from chile
//and handling at parent side


class ParentComponent extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             parentName: 'Parent'
        }

        this.greetParent = this.greetParent.bind(this)
    }

    greetParent(childName){
        alert(`Hello ${this.state.parentName} from ${childName}`)
    }
    
    render() {
        return (
            <div>
                <ChildComponent greetHandler={this.greetParent} />
            </div>
        )
    }
}

export default ParentComponent
