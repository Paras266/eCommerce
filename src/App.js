import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { Home } from './pages/home';
import { LoginPage } from './pages/LoginPage';
import { SignupPage } from './pages/SignupPage';
import { Cartpage } from './pages/Cartpage';
import { Checkoutpage } from './pages/Checkoutpage';
import { ProductdetailPage } from './pages/ProductdetailPage';
import './App.css';
 
function App() {
  return (
   <>
    <Router>
       
       <Routes>
       <Route  path='/' element={<Home/>}/>
       <Route  path='/login' element={<LoginPage/>}/>
       <Route  path='/signup' element={<SignupPage/>}/>
       <Route  path='/cart' element={<Cartpage/>}/>
       <Route  path='/checkout' element={<Checkoutpage/>}/>
       <Route  path='/productdetail' element={<ProductdetailPage/>}/>

       </Routes>

    </Router>
   </>
  );
}

export default App;
