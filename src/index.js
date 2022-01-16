import React from 'react'
import './index.css'
import App from './App'
import 'bootstrap/dist/css/bootstrap.min.css'
import { render } from 'react-dom'
import { BrowserRouter } from 'react-router-dom'

render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById('root')
)
