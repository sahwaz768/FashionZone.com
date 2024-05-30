import React from 'react'
import Allcomponents from './FirstPage/Allcomponents';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Women from './Womens section/Women';
import Mens from './Mens section/Mens';
import Product from './Product/Product';
import Signup from './FirstPage/Signup';
import ProfilePage from './FirstPage/Profilepage';
import CartPage from './FirstPage/Cartpage';


const App = () => {


  return (
    <BrowserRouter>
    <Routes>
      

      <Route path='/' element={<Allcomponents/>}/>
      <Route path='/women' element={<Women/>}/>
      <Route path='/men' element={<Mens/>}/>
      <Route path='/product' element={<Product/>}/>
      <Route path='/signup' element={<Signup/>}/>
      <Route path='/profilepage' element={<ProfilePage/>}/>
      <Route path='/cartpage' element={<CartPage/>}/>
    </Routes>
    </BrowserRouter>
  )
}

export default App



