import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import DropdownGuest from './DropdownGuest.jsx'
import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <DropdownGuest />
  </StrictMode>,
)
