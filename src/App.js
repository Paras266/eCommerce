import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { ProductList } from './features/product-list/ProductList';
import { Home } from './pages/home';
import { LoginPage } from './pages/LoginPage';
import { SignupPage } from './pages/SignupPage';
import './App.css';

function App() {
  return (
   <>
    <Router>
       
       <Routes>
       <Route  path='/' element={<Home/>}/>
       <Route  path='/login' element={<LoginPage/>}/>
       <Route  path='/signup' element={<SignupPage/>}/>
       </Routes>

    </Router>
   </>
  );
}

export default App;
