import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App';

// CSS GLOBAL
import '/public/css/style.css'

//USER CONTEXT
import { UserContextProvider } from './contexts/UserContext';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <UserContextProvider>
      <App />
    </UserContextProvider>
  </React.StrictMode>
)
