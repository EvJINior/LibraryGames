import React from 'react';
import ReactDOM from 'react-dom/client';
// import './index.css';
import App from './App';
// import Auth from './views/auth';
// import Library from './views/library';
import { BrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>       
    <BrowserRouter >
      <App />
    </BrowserRouter>
  </>
);


{/* <React.StrictMode>
<Library/>
</React.StrictMode> */}