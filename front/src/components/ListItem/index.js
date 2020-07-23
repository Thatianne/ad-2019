import React, { useState } from 'react'

import './styles.css'

import Button from './../Button'
import { NotificationManager } from 'react-notifications'

import { update, remove } from './../../services/api/users'

const ListItem = (props) => {
    const keys = Object.keys(props.item)
    const labelsKeys = Object.keys(props.labels)

    const valuesToUse = {};
    keys.forEach(key => {
        if (labelsKeys.includes(key)) {
            valuesToUse[key] = props.item[key]
        }
    });

    const keyToUse = Object.keys(valuesToUse)

    const [ edit, setEdit ] = useState(false)
    const [ values, setValues ] = useState(valuesToUse)

    function handleEdit() {
        setEdit(true)
    }

    function handleInputChange(column, value) {
        setValues({
            ...values,
            [column]: value
        })
    }

    function handleSave(e) {
        e.preventDefault();

        update(props.item._id, values)
        .then(result => {
            setEdit(false)
            NotificationManager.success('Dados atualizados')
        })
        .catch(err => {
            NotificationManager.error(err.response.data.message)
        })
    }

    function handleRemove(e) {
        e.preventDefault()

        remove(props.item._id)
        .then(result => {
            NotificationManager.success("Participante deletado")

            if (typeof props.onDelete === 'function') {
                props.onDelete(props.item)
            }
        })
        .catch(err => {
            NotificationManager.error(err.message)
        })
    }

    function handleCancel(e) {
        e.preventDefault()
        setEdit(false)
    }

    return (
        !edit ? (
            <div className="list-item flex-row-between">
                <div className="list-item-info flex-column">
                    {
                        keyToUse.map((column, index) => (
                            <span key={index}>
                                {values[column]}
                            </span>
                        ))
                    }
                </div>
                <div className="flex-row buttons-group">
                    <Button
                        text="Editar"
                        onClick={handleEdit}
                    />
                    <Button
                        text="Deletar"
                        onClick={handleRemove}
                        type="danger"
                    />
                </div>

            </div>
            ) : (
                <form className="list-item list-item-edit">
                    {
                        keyToUse.map((column, index) => (
                            <div
                                className="form-group"
                                key={index}>
                                <label>
                                    {props.labels[column]}
                                </label>
                                <input
                                    required
                                    value={values[column]}
                                    onChange={e => handleInputChange(column, e.target.value)}
                                />
                            </div>
                        ))
                    }
                    <div className="buttons-group">
                        <Button
                            text="Salvar"
                            onClick={handleSave}
                            type="primary"
                        />
                        <Button
                            text="Cancelar"
                            onClick={handleCancel}
                        />
                    </div>
                </form>
            )
    )
}

export default ListItem