import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { GlobalStyled } from './styles/Global'


ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <GlobalStyled />
    <App />
  </React.StrictMode>,
)
