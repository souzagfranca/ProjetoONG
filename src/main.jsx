import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './Apresentacao/App'
import Login from './Login/App'

// BOOTSTRAP
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.js';
import 'bootstrap-icons/font/bootstrap-icons.css';

// CSS GLOBAL
import '/public/css/style.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App/>
    {/* <Login> */}
  </React.StrictMode>
)
