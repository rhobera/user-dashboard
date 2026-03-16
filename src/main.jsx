import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

// Ensure there are no extra imports of React here
// and that App is the ONLY thing being rendered.

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)