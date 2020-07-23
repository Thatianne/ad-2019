import React from 'react'

import './styles.css'

const Button = (props) => {
    const { text, type = 'secondary' } = props

    let classes = `btn btn-${type}`

    function handleClick(e) {
        if (typeof props.onClick === 'function') {
            props.onClick(e)
        }
    }

    return (
        <button
            className={classes}
            onClick={handleClick}
        >
            {text}
        </button>
    )
}

export default Button