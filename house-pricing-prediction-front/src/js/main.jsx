import React from 'react'
import ReactDOM from 'react-dom/client'
import '../scss/styles.scss'
import App from './App.jsx'
import Navbar from './Components/Navbar.jsx'


ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
      <Navbar />
      <App />
    </React.StrictMode>,
)
