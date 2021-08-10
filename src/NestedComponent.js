import React from 'react'

function NestedComponent () {
    return (
        <div>
            <h1>This is parent</h1>
            <Child />
        </div>
    )
}
const Child= ()=>{
    return(
        <div>
            <p> this is the child</p>
        </div>
    )
}

export default NestedComponent
