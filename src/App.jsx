import { Container } from '@mui/material';
import Auth from './views/auth';
import Library from './views/Library';
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

// TODO install eslint + prettier

export default App;