import React from 'react'
import '../App.css'
import Cards from '../components/Cards'
import Footer from '../components/Footer'

export default function Offer({addSubscriber}){
    return(
        <>
            <Cards/>
            <Footer subscribeMail = {addSubscriber}/>
        </>
    )
} 