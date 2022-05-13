import React from 'react'
import '../App.css'
import Footer from '../components/Footer'
import Form from '../components/Form'

export default function Contact(){
    return(
        <>
            <div className='body'>
                <h1> Contact us</h1>
                <Form/>
            </div>
            <Footer/>
        </>
   )
} 