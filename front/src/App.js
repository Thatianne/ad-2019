import React, { useState, useEffect } from 'react';
import './App.css';

import List from './components/List'
import Button from './components/Button'
import Box from './components/Box'
import UserForm from './components/UserForm'
import { NotificationManager } from 'react-notifications'

import { getList } from './services/api/users'
import { raffle } from './services/api/app'

const App = () => {
  const [ users, setUsers ] = useState([])

  useEffect(() => {
    updateUsersList()
  }, [])

  function updateUsersList() {
    getList()
    .then(result => {
      setUsers(result.data)
    })
    .catch(err => {
      NotificationManager.error(err.response.data.message)
    })
  }

  function handleDelete() {
    updateUsersList()
  }

  function handleRaffle(e) {
    e.preventDefault()
    raffle()
    .then(result => {
      NotificationManager.success("Sorteio realizado!")
    })
    .catch(err => {
      NotificationManager.error(err.response.data.message)
    })
  }

  return (
    <div className="App flex-column-align">
      <h1>Amigo secreto</h1>
      <Box>
        <div className="flex-end raffle-box">
          <Button
              text="Sortear"
              type="success"
              onClick={handleRaffle}
            />
        </div>
        <UserForm onSave={updateUsersList}/>
        <List
          items={users}
          onDelete={handleDelete}
        />
      </Box>
    </div>
  );
}

export default App;
