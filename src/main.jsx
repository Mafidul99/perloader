import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'

import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import App from './App'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />

      <ToastContainer 
      position="top-right"
      toastClassName="toastbody"
      theme="colored"
      pauseOnFocusLoss={false}
      pauseOnHover={true}
      draggable={true}
      autoClose={3000}
      draggablePercent={60}
      closeOnClick={true}
    />
    </BrowserRouter>
  </React.StrictMode>
)