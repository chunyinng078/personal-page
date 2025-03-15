// import { StrictMode } from 'react'
import { SpeedInsights } from "@vercel/speed-insights/react";
import { Analytics } from "@vercel/analytics/react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./style.css";


// Add the dark class to the html element
document.documentElement.classList.add('dark');

createRoot(document.getElementById("root")).render(
  // <StrictMode>
  <>
    <App />
    <SpeedInsights />
    <Analytics />
  </>,
  // </StrictMode>,
);
