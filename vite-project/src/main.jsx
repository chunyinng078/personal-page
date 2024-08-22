// import { StrictMode } from 'react'
import { SpeedInsights } from "@vercel/speed-insights/react"
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import "./style.css";


createRoot(document.getElementById('root')).render(
  // <StrictMode>
    <App />
  // </StrictMode>,
)
