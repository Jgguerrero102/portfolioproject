import React from 'react'
import './style.css'

function Stylesheet(props) {
    let className = props.primary ? 'primary' : ''
    return (
        <div>
            <h1 className={`${className}font`}></h1>
        </div>
    )
}

export default Stylesheet