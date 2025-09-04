import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Blog from './Blog'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Blog/>
  </StrictMode>,
)
