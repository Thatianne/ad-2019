import React from 'react'
import './styles.css'

import ListItem from '../ListItem'

const List = (props) => {
    const items = props.items
    const labels = {
        name: "Nome",
        email: "E-mail"
    }

    console.log(items)

    function handleDelete() {
        if (typeof props.onDelete === 'function') {
            props.onDelete(props.item)
        }
    }

    return (
        <div className="list">
            {
                items.map(item => (
                    <ListItem
                        labels={labels}
                        item={item}
                        key={item._id}
                        onDelete={handleDelete}
                    />
                ))
            }
        </div>
    )
}

export default List