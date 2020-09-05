import React from 'react'

const btnStyle = {
    background: '#6658f5',
    color:'#fff',
    fontSize:'18px',
    fontWeight:'500'
}

const Button = ({name}) => {
    return (
        <button style={btnStyle} className = "btn">{name}</button>
    )
}


export default Button
