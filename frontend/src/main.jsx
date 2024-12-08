/**
 * main class to run UI
 */

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App';
import App2 from './App2';
import App3 from './App3';
import './index.css'

//website contents
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App2 />
  </StrictMode>,
)

//chatbot
createRoot(document.getElementById('app-root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)

//footer
createRoot(document.getElementById('foot-root')).render(
  <StrictMode>
    <App3 />
  </StrictMode>,
)
