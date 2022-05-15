import React from 'react'
import '../App.css'
import Cards from '../components/Cards';
import Footer from '../components/Footer';
import Section from '../components/Section';


function Home({addSubscriber}){
    return (
        <>
        <Section/>
        <Cards/>
        <Footer subscribeMail = {addSubscriber}/>
        </>
    );
}

export default Home; 