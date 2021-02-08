import React from 'react'

export const Scroll = (props) => {
    return (
        <div style={{overflowY:"auto", border:"1px solid black", height: "400px"}}>
            {props.children}
        </div>
    )
}
