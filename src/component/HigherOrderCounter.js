import React, { Component } from 'react'


const UpdatedComponent = (OriginalComponent) =>{
    class HigherOrderCounter extends Component {

        //this higher order component implement to change the component functionaity
        //with counter increment
        //here if child can inherit this property from any herirachy not sure to only just after parent
        //at any herirachy possible
        constructor(props) {
            super(props)
        
            this.state = {
                 count:0
            }
        }
        
    
        incrementCounter = () =>{
            this.setState( prevState =>{
                return {count : prevState.count + 1}
            })
        }
    
    
        render() {
            return <OriginalComponent count={this.state.count} incrementCounter={this.incrementCounter} {...this.props} />
            //here ...this.props    -> it will make sure that to pass other props passed from other componet who is using component which
            //is updated by this higherorder component
        }
    }

    return HigherOrderCounter
}


export default UpdatedComponent;
