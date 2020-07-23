import React, { useState } from 'react'

import './styles.css'

import Button from './../Button'
import { NotificationManager } from 'react-notifications'

import { create } from './../../services/api/users'

const UserForm = (props) => {

    const [ name, setName ] = useState('')
    const [ email, setEmail ] = useState('')

    function handleSubmit(e) {
        e.preventDefault();
        create({
            name,
            email
        }).then(result => {
            setName('')
            setEmail('')

            NotificationManager.success('Participante adicionado')
            if (typeof props.onSave === 'function') {
                props.onSave({
                    name,
                    email
                })
            }
        })
        .catch(err => {
            NotificationManager.error(err.response.data.message ? err.response.data.message: "Error")
        })

    }

    return (
        <form
            className="user-form"
            onSubmit={handleSubmit}
        >
            <h3>Adicionar participante</h3>
            <div className="form-group">
                <label>Nome</label>
                <input
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
            </div>

            <div className="form-group">
                <label>E-mail</label>
                <input
                    type="text"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
            </div>
            <div>
                <Button
                    text="Adicionar"
                    type="primary"
                />
            </div>
        </form>
    )
}

export default UserForm