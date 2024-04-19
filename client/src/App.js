import React from 'react'
import {Routes,Route} from 'react-router-dom'
import Navbar from './Components/Navbar/Navbar'
import Home from './Pages/Home'
import Product from './Components/HomeCategory/Product'
import Login from './Pages/Login'
import Signup from './Pages/Signup'

function App() {
  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/signup' element={<Signup/>}/>
        <Route path='/product/:id' element={<Product/>} />
      </Routes>
    </div>
  )
}

export default App