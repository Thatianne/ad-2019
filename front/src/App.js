import React from 'react';
import './App.css';

import List from './components/List'
import Button from './components/Button'
import Box from './components/Box'

function App() {
  const items = [
    {
      'Nome': 'thati',
      'E-mail': 'thati@gmail.com'
    },
    {
      'Nome': 'flavia',
      'E-mail': 'flavia@gmail.com'
    }
  ]

  return (
    <div className="App flex-column-align">
      <h1>Amigo secreto</h1>
      <Box>
        <List
          items={items}
        />
      </Box>
    </div>
  );
}

export default App;
