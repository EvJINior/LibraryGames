import { Container } from '@mui/material';
import Auth from './views/auth';
import Library from './views/library';
import Index from './index'
import { Routes, Route, Link } from 'react-router-dom';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Auth />} />
        <Route path='library' element={<Library />} />
      </Routes>

    </>
  )
}

export default App;