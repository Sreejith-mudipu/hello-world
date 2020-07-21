
import React from 'react'

const Hello = () => {
    // return(
    //     <div className= 'dummyClass'>
    //         <h1>Hello Sreejith</h1>
    //     </div>
    // )
    return React.createElement(
        'div', 
        {id:'helo', className: 'dummyClass'}, 
        React.createElement('h1',null,'Hello Sreejith') 
    )
}

export default Hello