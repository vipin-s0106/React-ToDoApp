import React from 'react';



const MethodComponent = (props) => 
    {
        //{name} is destructuring of props
        const {name} = props;
        return(
            // Using React Fragment to exclude this extra div tag when it will
            // render in parent
            <React.Fragment>
                <h4>Method Component Working {name}!!!</h4>
            </React.Fragment>
        );
    }

export default MethodComponent;