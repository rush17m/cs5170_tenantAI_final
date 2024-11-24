import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App';
import App2 from './App2';
import App3 from './App3';
import './index.css'

// renders the main app
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App2 />
  </StrictMode>,
)

// renders the chatbot
createRoot(document.getElementById('app-root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)

// renders the footer
createRoot(document.getElementById('foot-root')).render(
  <StrictMode>
    <App3 />
  </StrictMode>,
)
