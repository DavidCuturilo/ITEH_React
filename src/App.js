import React, {useState} from "react";
import './App.css';
import Navbar from './components/Navbar';
import {BrowserRouter as Router,Routes, Route} from 'react-router-dom';
import Home from "./pages/Home";
import Offer from "./pages/Offer";
import Contact from "./pages/Contact";

function App() {
  const [subscribers, subscribe] = useState(113)

  function addSubscriber(){
    document.getElementById('subscribe').value = ''
    alert("Thank you for your subscription!")
    subscribe(subscribers+1)
  }

  return (
    <>
    <Router>
     <Navbar/>
     <Routes>
       <Route path='/' element={<Home addSubscriber = {addSubscriber}/>} />
       <Route path='/offer' element={<Offer addSubscriber = {addSubscriber}/>} />
       <Route path='/contact' element={<Contact subscribers = {subscribers} addSubscriber = {addSubscriber}/>} />
     </Routes>
     </Router>
    </>
  );
}

export default App;