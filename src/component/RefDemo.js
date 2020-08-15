import React, { Component } from 'react'

export class RefDemo extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             
        }

        this.inputref = React.createRef()
        this.focusInput = this.focusInput.bind(this)
    }

    focusInput = () => {
        console.log(this.inputref)
        this.inputref.current.focus()
    }
    
    render() {
        return (
            <div>
                <input type="text" ref={this.inputref}/><br />
                <button onClick={this.focusInput}>Click</button>
            </div>
        )
    }
}

export default RefDemo
