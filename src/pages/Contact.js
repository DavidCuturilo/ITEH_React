import React from 'react';
import '../App.css'
import Footer from '../components/Footer'
import Form from '../components/Form'
import Subscribers from '../components/Subscribers'

export default function Contact({subscribers, addSubscriber}){
   
    return(
        <>
            <div className='body'>
                <h1> Contact us</h1>
                <Form/>
                <Subscribers subscribersNum = {subscribers}/>
            </div>
            <Footer subscribeMail = {addSubscriber}/>
        </>
   )
} 