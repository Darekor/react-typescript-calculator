import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import CalculatorBody from './CalculatorBody.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <CalculatorBody />
  </StrictMode>,
)
