import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import ProductForm from './App.jsx'
import ShoppingCart from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App /> */}
    <ProductForm/>
    {/* <ShoppingCart/> */}
  </StrictMode>,
)
