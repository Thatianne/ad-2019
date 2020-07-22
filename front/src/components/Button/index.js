import React from 'react'

import './styles.css'

const Button = (props) => {
    const { text } = props

    return (
        <button className="btn">
            {text}
        </button>
    )
}

export default Button