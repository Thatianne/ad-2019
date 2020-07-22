import React from 'react'

import './styles.css'

import Button from './../Button'

const ListItem = (props) => {
    const keys = Object.keys(props.item)

    return (
        <div className="list-item flex-row-between">
            <div className="list-item-info flex-column">
                {
                    keys.map((column, index) => (
                        <span key={index}>
                            {props.item[column]}
                        </span>
                    ))
                }
            </div>
            <div className="flex-row">
                <Button text="Editar"/>
                <Button text="Deletar"/>
            </div>

        </div>
    )
}

export default ListItem