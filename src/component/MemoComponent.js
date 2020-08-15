import React from 'react'

//Memo Component is similar to Class Pure Component

function MemoComponent(props) {
    console.log("Memo Component")
    return (
        <div>
            Memo Component {props.name}
        </div>
    )
}

export default React.memo(MemoComponent)
