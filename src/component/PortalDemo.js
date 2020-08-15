import React, { Component } from 'react'
import ReactDOM from 'react-dom';


//Portal demo is used when you want to render the component outside 
//of root div tag of index.html file

export class PortalDemo extends Component {
    render() {
        return ReactDOM.createPortal(
            <div>
                Portal Demo
            </div>,
            document.getElementById('portal-root')
        )
    }
}

export default PortalDemo;
