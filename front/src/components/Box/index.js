import React from 'react'

import './styles.css'
const Box = (props) => {

    return (
        <div className="box">
            {props.children}
        </div>
    )
}

export default Box