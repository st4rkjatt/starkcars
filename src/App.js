import './App.css';
import React from 'react'

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './Home';
import Brands from './components/Brands';
import Contactus from './components/Contactus';
import Aston_martin from './components/Aston_martin';
import Buggatti from './components/Buggatti';
import About from './components/About';
import Profile from './components/Profile';
import Api from './Api/Api';
import Add from './Api/Add';
import Edit from './Api/Edit';
import Redux from './componentsRedux/Redux';
import AddR from './componentsRedux/AddR';
import EditR from './componentsRedux/EditR';
import AllProduct from './ecommerce/AllProduct';


function App() {
  return (
    <>
   

      <BrowserRouter>
      <Navbar/>
    
      <Routes>
      <Route exact path="/" element={<Profile/>}/>
          <Route exact path="/home" element={<Profile/>} />
          <Route exact path="/brands" element={<Brands />} />
          <Route exact path="/contactus" element={<Contactus />} />
          <Route path="/aston_martin" element={<Aston_martin/>} />
          <Route path="/buggatti" element={<Buggatti/>} />
          <Route path="/about" element={<About/>} /> 
              
          <Route path="/api" element={<Api/>} />  
           <Route path="/api/add" element={<Add/>} /> 
           <Route path="/api/edit/:id" element={<Edit/>} /> 
    
       <Route exact path="/redux" element={<Redux/>} /> 
       <Route exact path="/redux/addR" element={<AddR/>} /> 
       <Route exact path="/redux/editR/:id" element={<EditR/>} /> 
    
    <Route exact path="/allproduct" element={<AllProduct/>} /> 
      </Routes>
      <Footer/>
    </BrowserRouter>
    </>
  );
}

export default App;
