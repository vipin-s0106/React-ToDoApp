import React, { PureComponent } from 'react'


//Pure Component means If component is rendering on every 
//certain interval so pure component only render due to parent component render
// when the state and props present or pass to the Pure component change with it's memory address
//only then it will render
export class PureComponent1 extends PureComponent {
    render() {
        console.log("Pure Component")
        return (
            <div>
                Pure Component {this.props.name}
            </div>
        )
    }
}

export default PureComponent1
