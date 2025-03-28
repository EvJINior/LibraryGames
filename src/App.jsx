import { Container } from '@mui/material';
import Auth from './views/Authorization/Auth';
import Library from './views/Library';
import Index from './index'
import { Routes, Route } from 'react-router-dom';
import { useState } from 'react';

function App() {



  return (
    <>
      <Routes >
        <Route path='/' element={<Auth />} />
        <Route path='library' element={<Library />} />
      </Routes>
    </>
  )
}

// TODO install eslint + prettier

export default App;