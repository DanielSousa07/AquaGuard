import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import AOS from 'aos';
import 'aos/dist/aos.css'; // O CSS da biblioteca

AOS.init({
  duration: 1000,
  once: true
});

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)