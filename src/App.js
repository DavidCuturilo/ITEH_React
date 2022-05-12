import React from "react";
import './App.css';
import Navbar from './components/Navbar';
import {BrowserRouter as Router,Routes, Route} from 'react-router-dom';
import Home from "./pages/Home";
import Offer from "./pages/Offer";
import Contact from "./pages/Contact";

function App() {
  return (
    <>
    <Router>
     <Navbar/>
     <Routes>
       <Route path='/' element={<Home/>} />
       <Route path='/offer' element={<Offer/>} />
       <Route path='/contact' element={<Contact/>} />
     </Routes>
     </Router>
    </>
  );
}

export default App;