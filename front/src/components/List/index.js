import React from 'react'
import './styles.css'

import ListItem from '../ListItem'

const List = (props) => {
    const items = props.items

    return(
        <div className="list">
            {
                items.map((item, index) => (
                    <ListItem
                        item={item}
                        key={index}
                    />
                ))
            }
        </div>
    )
}

// Table.protoTypes = {
// }

export default List