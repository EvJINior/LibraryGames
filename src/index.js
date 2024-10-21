import React from 'react';
import ReactDOM from 'react-dom/client';
// import './index.css';
// import App from './App';
import Auth from './views/auth';
import Library from './views/library';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    {/* <Auth/> */}
    <Library/>
    
    {/* <App/> */}
  </>
);


{/* <React.StrictMode>
<Library/>
</React.StrictMode> */}