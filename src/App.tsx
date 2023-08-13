import Home from './pages/Home'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import NotFound from './pages/NotFound'
import Product from './pages/Product'
import Checkout from './pages/Checkout'

function App() {

  return (
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/product' element={<Product/>}/>
      <Route path='*' element={<NotFound/>}/>
      <Route path='/checkout' element={<Checkout/>}/>
    </Routes>
  )
}

function WrappedData (){
  return(
  <BrowserRouter>
    <App/>
  </BrowserRouter>
  )
}

export default WrappedData
