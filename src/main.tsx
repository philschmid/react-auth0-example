import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import Auth0ProviderWithHistory from './auth/auth0-provider-with-history'
import { BrowserRouter as Router } from 'react-router-dom'


ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Router>
      <Auth0ProviderWithHistory>
        <App />
      </Auth0ProviderWithHistory>
    </Router>
  </React.StrictMode>
)
