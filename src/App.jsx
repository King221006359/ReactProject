import './App.css'
//import React, { useState } from 'react';
import About from './pages/About';
import Contact from './pages/Contact';
import Home from './pages/Home';
import Login from './pages/Login'
import Signup from './pages/signup';
import Blog from './pages/Blog';
import Full from './pages/Full';
import Dashboard from './components/Dashboard';
// import Logout from './components/Logout';
import Footer from './pages/Footer';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';

function App() {
  
 return (

    <Router>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/About' element={<About/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/Login' element={<Login/>} />
        <Route path='/Signup' element={<Signup/>} />
        <Route path='/Blog' element={<Blog/>} />
        <Route path='/Full' element={<Full />}/>
        <Route path='/Dashboard' element={<Dashboard />}/>
        {/* <Route path='/Logout' element={<Logout/>} /> */}
        <Route path='/Footer' element={<Footer/>} />
       

      </Routes>
    </Router>
    
  
  );
}

export default App;
